import ProductsSection from "@/components/ProductsSection";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* Page Header */}
      <div className="container mx-auto px-4 pt-9 pb-0.1 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-primary mb-8">
INDUS PROPOWER TECHNO INDUSTRIES
</h1>

        <span className="text-secondary font-semibold text-sm tracking-wider uppercase">
          Solar Products
        </span>

        <div className="text-sm text-gray-500 mb-4 text-center">
  <a href="/" className="hover:text-primary">Home</a>
  <span className="mx-2">›</span>
  <span className="font-medium text-gray-700">Products</span>
</div>

        <h1 className="font-heading text-3xl md:text-4xl font-bold mt-3">
          Explore Our Complete Solar Product Catalog
        </h1>

        

        <p className="text-muted-foreground max-w-xl mx-auto mt-4">
          Discover our range of high-quality solar panels, lithium batteries,
          inverters, and accessories designed for efficient and reliable
          solar energy systems.
        </p>

        <div className="flex justify-center gap-4 mt-6 mb-10 flex-wrap">

<a
 href="/"
 className="px-5 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition"
>
Home
</a>

<a
 href="/#about"
 className="px-5 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition"
>
About Us
</a>

<a
 href="/#contact"
 className="px-5 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition"
>
Contact
</a>

</div>

      </div>

      {/* Product List */}
      <ProductsSection showHeader={false} />

    </div>
  );
};

export default Products;