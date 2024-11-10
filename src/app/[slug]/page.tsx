import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";
import { wixClientServer } from "@/lib/wixClientServer";
import DOMPurify from "isomorphic-dompurify";
import { notFound } from "next/navigation";

const SinglePage = async ({ params }: { params: { slug: string } }) => {

  const wixClient = await wixClientServer();

  // fetch product by slug
  const products = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();

  if (!products.items[0]) {
    return notFound();
  }

  const product = products.items[0]; // get initial product
  console.log(product.productOptions);

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMAGE */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages items={product.media?.items} />
      </div>
      {/* TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        <div className="text-gray-500" dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(
            product.description || ""
          )
        }} />
        <div className="h-[2px] bg-gray-100" />

        {
          product?.priceData?.price === product?.priceData?.discountedPrice ?
            (
              <div className="flex items-center gap-4">
                <h3 className="font-medium text-2xl">₹{product.priceData?.price}</h3>
              </div>

            ) : (
              <div className="flex items-center gap-4">
                <h3 className="text-xl text-gray-500 line-through">₹{product.priceData?.price}</h3>
                <h2 className="font-medium text-2xl">{product.priceData?.discountedPrice}</h2>
              </div>
            )

        }

        <div className="h-[2px] bg-gray-100" />
        {
          product.variants && product.productOptions ?
            <CustomizeProducts
              productId={product._id || ""}
              variants={product.variants}
              productOptions={product.productOptions}
            /> : (

              <Add
                productId={product._id || ""}
                variantId="00006000-0000-0000-0000-000000000000"
                stockNumber={product.stock?.quantity || 0}
              />
            )
        }

        <div className="h-[2px] bg-gray-100" />
        {

          product.additionalInfoSections?.map((section: any) => (

            <div className="text-sm " key={section.title}>
              <h4 className="font-medium mb-4 ">{section.title}</h4>
              <p>
                {
                  section.description
                }
              </p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SinglePage;