import axios from 'axios'

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer AEwZtjZqgl8FrdTeeUnAcqMj-SsvFksy7Iupxv85KCs_2kmIyUojlnMQjCa2NF8-huE3tbINA2Y_zFg5msrZxZf8_nWUU8eoDZlGe8UN_ayqKnKgAPpJomnPGARiXnYx' 
    }
});