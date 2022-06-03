import Server from "./Server";

const PORT = process.env.port || 3001;

Server.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
});
