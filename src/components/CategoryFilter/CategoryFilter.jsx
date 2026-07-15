import "./CategoryFilter.css";
import { categories } from "../../data/categories";

function CategoryFilter({

    selectedCategory,

    setSelectedCategory

}) {

    return (

        <div className="category-section">

            <h2>Select Your Interest</h2>

            <div className="category-container">

                {

                    categories.map((category) => (

                        <div

                            key={category.id}

                            className={`category-card ${
                                selectedCategory === category.name
                                    ? "active"
                                    : ""
                            }`}

                            onClick={() =>
                                setSelectedCategory(category.name)
                            }

                        >

                            <span>{category.icon}</span>

                            <p>{category.name}</p>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default CategoryFilter;