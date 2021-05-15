import React from "react";
import axios from "axios";
import Feed from '../Feed/Feed'

class Feeds extends React.Component {
    state = {
        feeds: null
    }

    async componentDidMount() {
        let {data} = await axios.get('https://picsum.photos/v2/list')
        const feeds = data
        this.setState({feeds})
    }

    render() {
        const {feeds} = this.state
        return (
            <div>

                {feeds && feeds.map(({...f}) =>

                    <Feed key={f.id} {...f} />
                )}
            </div>

        )
    }
}

export default Feeds