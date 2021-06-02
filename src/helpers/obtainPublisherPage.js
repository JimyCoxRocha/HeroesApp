export const obtainPublisherPage = ( publisher ) => {
    let publisherPage = "";
    ( publisher === "Marvel Comics" ) ? publisherPage = "marvel" : publisherPage =  "dc";

    return publisherPage;
}