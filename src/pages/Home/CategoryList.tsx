import CategoryItem from './CategoryItem';

interface CategoryListProps {
  heading: string;
  items: CategoryProduct[]; // Thêm prop items với kiểu dữ liệu là một mảng các CategoryProduct
}

interface CategoryProduct {
  title: string;
  imageSrc: string;
  description: string;
}

const CategoryList: React.FC<CategoryListProps> = ({ heading, items }) => {
  return (
    <div className="category-list">
      <div className="title text-green-400 text-md font-bold uppercase text-center relative pt-2 pb-6">
        {heading}
      </div>
      <div className="grid grid-cols-4 gap-2 mb-10">
        {items.map((product, index) => (
          <CategoryItem
            key={index}
            title={product.title}
            imageSrc={product.imageSrc}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryList;