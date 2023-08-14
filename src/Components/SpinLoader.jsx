import { ClipLoader } from "react-spinners";
import '../StyleSheets/Loader.css'


export default function SpinLoader({loading}) {

    
    return (
        <div className="loader-cover">
            <ClipLoader
                color='red'
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
                speedMultiplier= '0.5'
                />
            <h3>
                Updating the list please wait !!!    
            </h3>
        </div>
    )
   
}