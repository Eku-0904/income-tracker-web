import { useRouter } from "next/router"
import { Shatar } from "./icons/TsenherShatar"

type Props = {
    handleModalOpen: ()=> void;
}


export default function Navbar({handleModalOpen}: Props) {
    const router = useRouter()

    return (
        <div style={{
            backgroundColor: 'white',
            color: 'black',
            width: '100vw',
            height: '70px',
            display: 'flex',
            alignItems: 'center',
            padding: '0 20px'
        }}>
            <  Shatar />
            <div style={{
                marginLeft: "20px",
                cursor: "pointer",
            }} onClick={()=> router.push("./dashboard")}>
                Dashboard
            </div>
            <div onClick={()=> router.push("./records")}style={{
                marginLeft: "20px",
                cursor: "pointer",
            }}>
                Records
            </div>

            <div onClick={handleModalOpen} style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                height: "30px",
                width: "100px",
                backgroundColor: "#0166FF",
                borderRadius: "50px",
                marginLeft: "900px",
                cursor: "pointer",
            }}>
                +Records
            </div>
        </div>
    )
}
