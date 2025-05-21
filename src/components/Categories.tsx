import React, { JSX } from "react";
import useWhyDidYouUpdate from "ahooks/lib/useWhyDidYouUpdate";
type CategoriesProps = {
  value: number;
  onChangeCategory: (index: number) => void;
};

const Categories = React.memo(
  ({ value, onChangeCategory }: CategoriesProps): JSX.Element => {
    const categories = [
      "Все",
      "Мясные",
      "Вегетарианская",
      "Гриль",
      "Острые",
      "Закрытые",
    ];
    useWhyDidYouUpdate("Categories", { value, onChangeCategory });
    return (
      <div className="categories">
        <ul>
          {categories.map((category, index) => (
            <li
              className={value === index ? "active" : ""}
              onClick={() => onChangeCategory(index)}
              key={index}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    );
  },
);
export default Categories;
