// declare module '*.png' {
//     const value: any;
//     export default value;
//   }
  
//   import bgImage from '../../DefaultImages/whatsappBackground.png';
  

// import bgImage from '../../DefaultImages/whatsappBackground.png'
import { Box, IconButton, InputBase, Stack } from '@mui/material';
import RightToolBar from '../Toolbar/rightToolBar';
import { PlusIcon, SendIcon, SmilyIcon, VoiceIcon } from '../../assets/icons';
import { useState } from 'react';
import * as React from 'react';

function ChatSection() {

    const [sendOption, setSendOption] = useState(false);

    return (
        <>
            <Stack
                justifyContent={"space-between"}
                height={"inherit"}
                width={"inherit"}
                fontFamily={"inherit"}
            >
                <RightToolBar />
                <Stack
                    sx={{
                        // backgroundImage: `url(${bgImage})`,
                        height: "100%",
                        bgcolor: "#efeae2",
                    }}
                >

                </Stack>

                <Stack
                    direction={"row"}
                    bgcolor={"#F0F2F5"}
                    alignItems={"center"}
                    padding={"5px 16px"}
                // justifyContent={"space-between"}
                >
                    <Stack
                        padding={"5px 0"}
                        direction={"row"}
                        alignItems={"inherit"}
                    >
                        <Box
                            margin={"0 8px"}
                        >
                            <SmilyIcon />
                        </Box>
                        <Box
                            margin={"0 8px"}
                        >
                            <IconButton><PlusIcon /></IconButton>
                        </Box>
                    </Stack>

                    <InputBase
                        placeholder='Type a message'
                        sx={{
                            backgroundColor: "#FFFFFF",
                            fontFamily: "inherit",
                            borderRadius: "10px",
                            padding: "5px 12px",
                            margin: "5px 8px",
                        }}
                        fullWidth
                        onChange={() => setSendOption(true)}
                    />
                    <Box
                        margin={"0 10px 0 15px"}
                    >
                        {
                            sendOption
                                ?
                                <SendIcon />
                                :
                                <VoiceIcon />
                        }

                    </Box>
                </Stack>
            </Stack>
        </>
    )
}

export default ChatSection;