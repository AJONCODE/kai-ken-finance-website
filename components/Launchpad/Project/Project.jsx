import React from "react";
import BuyTokens from "./BuyTokens";
const axios = require("axios");
import ReactMarkdown from "react-markdown";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      info: null,
    };
  }

  componentDidMount = () => {
    const { id } = this.props;
    axios
      .get(
        `https://dry-badlands-06095.herokuapp.com/api/projects/${id}?populate=*`,
        {}
      )
      .then((res) => {
        this.setState({
          info: res.data.data.attributes,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { id, address, signer } = this.props;
    const { info, loading } = this.state;
    return loading ? null : (
      <div className="lg:inline-grid grid-row lg:grid-cols-3 gap-4 auto-cols-min">
        <div className="bg-gray lg:row-span-1 rounded-xl lg:col-span-1 p-6">
          <BuyTokens
            data={info}
            projectId={info.project_id}
            address={address}
            signer={signer}
            // image={`https://dry-badlands-06095.herokuapp.com${info.cover_image.data.attributes.url}`}
          />
        </div>
        <div className="bg-gray rounded-xl col-span-2 row-span-3 pl-8 pr-8 pt-6 pb-6">
          <div className="flex"></div>
          <ReactMarkdown className="markdown">{info.Content}</ReactMarkdown>
        </div>
      </div>
    );
  }
}

export default Project;
