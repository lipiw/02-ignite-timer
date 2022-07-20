import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

import {LayoutContainer} from "./styles";

export function DefaultLayout(){
    return(
        <LayoutContainer>
            {/* Header padrão em todas paginas, outlet são as paginas, isso dependera da rota que esta. */}
            <Header/>
            <Outlet/>
        </LayoutContainer>
    );
}