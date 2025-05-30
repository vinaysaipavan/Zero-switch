import { Section1 , Section2 ,Section3 } from "./components";
import { CLIpage } from "./CLIpage";

export function Mainpage(){
    return(
        <>
        <Section1 />
        <CLIpage />
        <Section2 />
        <Section3 />
        </>
    )
}