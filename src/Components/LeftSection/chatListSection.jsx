import { Avatar, Divider, Stack, Typography } from "@mui/material";

function ChatListSection(props) {
    return (
        <>

            {props.contacts.map((contact, index) => (
                <>
                    <Stack
                        key="index"
                        width="100%"
                        margin="2px 0 2px 0"
                        justifyContent="space-between"
                        direction="row"
                        alignItems="center"
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
                                >
                                    {contact.name}
                                </Typography>
                                <Typography
                                    fontSize="14px"
                                    color="#667781"
                                >
                                    {props.chats.find((chat) => chat.mobile === contact.mobile)?.content || ""}
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack
                        >
                            <Typography>
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