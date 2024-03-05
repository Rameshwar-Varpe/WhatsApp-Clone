import bgImage from '../../DefaultImages/whatsappBackground.png'
import { Stack } from '@mui/material';
import RightToolBar from '../Toolbar/rightToolBar';
function ChatSection(props) {

    return (
        <>
            <Stack
                justifyContent={"space-between"}
                height={"inherit"}
                width={"inherit"}
                fontFamily={"inherit"}
            >
                <RightToolBar selectedContact={props.selectedContact} />
                <Stack
                    sx={{
                        backgroundImage: `url(${bgImage})`,
                        height: "100%",
                        bgcolor: "#efeae2",
                    }}
                >
                </Stack>
            </Stack>
        </>
    )
}

export default ChatSection;