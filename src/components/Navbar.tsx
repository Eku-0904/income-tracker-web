import { useRouter } from "next/router"
import { Shatar } from "./icons/TsenherShatar"

type Props = {
    handleModalOpen: () => void;
}

export default function Navbar({ handleModalOpen }: Props) {
    const router = useRouter()

    const goToDashboard = async () => {
        try {
            await router.push("./dashboard");
        } catch (error) {
            console.error('Error navigating to dashboard:', error);
        }
    };

    const goToRecords = async () => {
        try {
            await router.push("./records");
        } catch (error) {
            console.error('Error navigating to records:', error);
        }
    };

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
            <Shatar />
            <div style={{
                marginLeft: "20px",
                cursor: "pointer",
            }} onClick={goToDashboard}>
                Dashboard
            </div>
            <div onClick={goToRecords} style={{
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
