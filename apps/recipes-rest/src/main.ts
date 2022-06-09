import server from "./Server";

const PORT = process.env.port || 3001;

server.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
});
