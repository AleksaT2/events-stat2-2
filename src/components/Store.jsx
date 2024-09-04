import { useState } from "react";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardView";
import ListView from "./ListView";

export default function Store(props) {
    const [viewType, setViewType] = useState("view_module");
    const {products} = props;
    
	const onSwitch = () => {
		let newViewType;
		viewType === "view_module" ? newViewType = "view_list" : newViewType = "view_module"
		setViewType(newViewType);
	}


    return(
        <div className="store">
            <IconSwitch icon={viewType} onSwitch={onSwitch} />
            {viewType === "view_module" ?
                <CardsView cards={products} /> :
                <ListView items={products} />
            }
        </div>
    );
}