import { Avatar, Divider, Stack, Typography } from "@mui/material";

function ChatListSection(props) {
    return (
        <>

            {props.contacts.map((contact, index) => (
                <>
                    <Stack
                        key={index}
                        width="100%"
                        justifyContent="space-between"
                        direction="row"
                        alignItems="center"
                        whiteSpace={"nowrap"}
                    // overflow={"hidden"}
                    // textOverflow={"ellipsis"}
                    >
                        <Stack
                            direction="row"
                            alignItems="center"
                        >
                            <Stack
                                padding="12px 15px 12px 13px"
                            >
                                <Avatar key={index} alt="profile picture" src={contact.profile} sx={{ height: "49px", width: "49px" }} />
                            </Stack>

                            <Stack
                                direction="column"
                                padding="0 15px 0 0"
                            >
                                <Typography
                                    fontSize="17px"
                                    color="#111B21"
                                    fontFamily={"inherit"}
                                >
                                    {contact.name}
                                </Typography>
                                <Typography
                                    fontFamily={"inherit"}
                                    fontSize="14px"
                                    color="#667781"
                                    sx={{
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                        maxWidth: '100%'
                                    }}
                                >
                                    {props.chats.find((chat) => chat.mobile === contact.mobile)?.content || ""}
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack
                        padding={"0 15px 0 0"}
                        >
                            <Typography
                                color={"#667781"}
                                fontFamily={"inherit"}
                                fontSize={"12px"}
                            >
                                {contact.lastChat}
                            </Typography>

                            <Typography>
                                { }
                            </Typography>
                        </Stack>
                    </Stack>
                    <Divider variant="inset" />
                </>
            ))}
        </>
    );
}

export default ChatListSection;