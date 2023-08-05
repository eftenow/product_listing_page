import Category from './Category/Category';
import Colors from './Colors/Colors';
import Price from './Price/Price';
import './Sidebar.css'



const Sidebar = () => {
     return(
        <>
            <section className="sidebar">
                <div className="filters-title-container">
                    <h1>Filters</h1>
                </div>

                <Category />
                <Price />
                <Colors />

            </section>
        </>
     )
}


export default Sidebar;