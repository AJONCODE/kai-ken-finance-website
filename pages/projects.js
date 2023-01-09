import React from "react";
import Apply from "../components/Home/Apply";
import IDOSCard from "../components/Launchpad/Utils/IDOSCard";
import VerticalCard from "../components/Launchpad/Utils/VerticalCard";
import Loader from "../components/util/Loader";
import { BASEURI } from "./api/baseURI";
const axios = require("axios");

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: null,
      loading: true,
    };
  }

  componentDidMount = () => {
    axios
      .get(`${BASEURI}project-masters`)
      .then((res) => {
        this.setState({
          projects: res.data.data,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { projects, loading } = this.state;
    return loading ? (
      <Loader />
    ) : (
      <div className="mx-auto container">
        <div className="pt-[150px]">
          <div className="mb-5 flex flex-row">
            <div className="w-full h-auto font-Poppins text-base font-bold text-white">IDOS on Kai Ken Finance</div>
            <input
                  className="px-3 bg-primary-black text-dusky-white mb-3 w-[228px] h-[25px] rounded-[5px] outline:none border-[1px] border-[#5F5C65] font-Poppins font-regular text-sm text-white placeholder-[#5F5C65]"
                  placeholder="Search For Projects"
                  disabled={false}
                />
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="flex flex-wrap justify-start w-3/3 px-6">
            {projects.map((info, key) => (
              <div key={key} className="mb-3 flex w-1/3 h-[450px] pt-3">
                <IDOSCard
                  id={info.id}
                  info={info.attributes}
                  {...this.props}
                  key={key}
                />
              </div>
            ))}
            </div>
          </div>
          {/* <Apply /> */}
        </div>
      </div>
    );
  }
}
