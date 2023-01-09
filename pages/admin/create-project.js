import {
  allowanceAnyToken,
  approveAnyToken,
  createProject,
  deployContract,
  getStakingIdwithTokenSymbol,
  getTokenDecimal,
  getTokenSymbol,
  setStackingContract,
} from "../../helpers/launcher-utils";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import TextField from "@mui/material/TextField";
import { pinDirectoryToIPFS } from "../../helpers/pinFileToIPFS";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import toast from "react-hot-toast";
import { ethers } from "ethers";

import ReactMarkdown from "react-markdown";
import * as ReactDOM from "react-dom";
import React from "react";
import Image from "next/image";
// import style manually
import "react-markdown-editor-lite/lib/index.css";
import dynamic from "next/dynamic";
import MarkDown from "../../helpers/markdown";
import MarkdownIt from "markdown-it";
import emoji from "markdown-it-emoji";
import subscript from "markdown-it-sub";
import superscript from "markdown-it-sup";
import footnote from "markdown-it-footnote";
import deflist from "markdown-it-deflist";
import abbreviation from "markdown-it-abbr";
import insert from "markdown-it-ins";
import mark from "markdown-it-mark";
import tasklists from "markdown-it-task-lists";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-light.css";
import uploadImage from "../../styles/images/img-upload.png";
import MdEditor from "react-markdown-editor-lite";

var HASH = "";
class CreateProject extends React.Component {
  mdParser = null;
  mdEditor = null;
  constructor(props) {
    super(props);
    this.mdEditor = React.createRef();
    this.getStakePoolId();
    this.mdParser = new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true,
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(lang, str).value;
          } catch (__) {}
        }
        return ""; // use external default escaping
      },
    })
      .use(emoji)
      .use(subscript)
      .use(superscript)
      .use(footnote)
      .use(deflist)
      .use(abbreviation)
      .use(insert)
      .use(mark)
      .use(tasklists, { enabled: this.taskLists });
    this.renderHTML = this.renderHTML.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);

    this.myRef = React.createRef();
    this.state = {
      projName: "", //y
      projDesc: "", //y
      Image_Hash: uploadImage, //y
      dropdown: false,
      stake: true,
      approving: false,
      creating: false,
      saleAddress: "", //y
      decimal: "", //y
      symbol: "",
      cost: "", //not included into payLoad
      amountinusd: "",
      amount: "", //y
      pamount: "", //y
      pamountinusd: "",
      allowance: "",
      SStake: "", //y
      EStake: "", //y
      SPublic: "", //y
      EPublic: "", //y
      stakePoolId: "",
      publicperwallet: "",
      publicperwalletinusd: "",
      stakeIdList: [],
      twitter: "",
      linkedin: "",
      instagram: "",
      facebook: "",
      medium: "",
      telegram: "",
      reddit: "",
      email: "",
    };
  }

  async getStakePoolId() {
    let data = await getStakingIdwithTokenSymbol();
    this.setState({
      stakeIdList: data,
    });
  }

  handleEditorChange({ html, text }, event) {
    this.setState({ projDesc: text });
  }

  renderHTML(text) {
    // 模拟异步渲染Markdown
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.mdParser.render(text));
      }, 1000);
    });
  }

  handleImageUpload(file, callback) {
    const reader = new FileReader();
    reader.onload = () => {
      const convertBase64UrlToBlob = (urlData) => {
        let arr = urlData.split(","),
          mime = arr[0].match(/:(.*?);/)[1];
        let bstr = atob(arr[1]);
        let n = bstr.length;
        let u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
      };
      const blob = convertBase64UrlToBlob(reader.result);
      setTimeout(() => {
        // setTimeout 模拟异步上传图片
        // 当异步上传获取图片地址后，执行calback回调（参数为imageUrl字符串），即可将图片地址写入markdown
        callback("https://avatars0.githubusercontent.com/u/21263805?s=40&v=4");
      }, 1000);
    };
    reader.readAsDataURL(file);
  }

  handleGetMdValue = () => {
    this.mdEditor && alert(this.mdEditor.getMdValue());
  };
  handleGetHtmlValue = () => {
    this.mdEditor && alert(this.mdEditor.getHtmlValue());
  };

  handleStakeidChange = (event) => {
    this.setState({ stakePoolId: event.target.value });
  };
  checkAllowance = async () => {
    const { saleAddress, decimal } = this.state;
    const { address } = this.props;
    if (saleAddress && decimal) {
      let allowance = await allowanceAnyToken(saleAddress, address, decimal);

      this.setState({
        allowance,
      });
    }
  };
  approve = async () => {
    debugger;
    const {
      projName,
      projDesc,
      Image_Hash,
      saleAddress,
      cost,
      SStake,
      EStake,
      SPublic,
      EPublic,
      amountinusd,
      pamountinusd,
      publicperwalletinusd,
    } = this.state;
    let errMessage = "";
    let errorFlag = false;
    if (projName == "") {
      errMessage += "Please enter project name\n";
      errorFlag = true;
    }
    if (projDesc == "") {
      errMessage += "Please enter project description\n";
      errorFlag = true;
    }
    if (Image_Hash == "") {
      errMessage += "Please upload project cover image\n";
      errorFlag = true;
    }
    if (saleAddress == "") {
      errMessage += "Please enter sale token contract address\n";
      errorFlag = true;
    }
    if (cost == "") {
      errMessage += "Please enter cost per token(in $USD)\n";
      errorFlag = true;
    }
    if (amountinusd == "") {
      errMessage += "Please enter total sale amount\n";
      errorFlag = true;
    }
    if (pamountinusd == "") {
      errMessage += "Please enter public allocation(in $USD)\n";
      errorFlag = true;
    }
    if (publicperwalletinusd == "") {
      errMessage += "Please enter public allowance/wallet(in $USD)\n";
      errorFlag = true;
    }
    if (SStake == "") {
      errMessage += "Please enter staking start time\n";
      errorFlag = true;
    }
    if (EStake == "") {
      errMessage += "Please enter staking end time\n";
      errorFlag = true;
    }
    if (SPublic == "") {
      errMessage += "Please enter public start time\n";
      errorFlag = true;
    }
    if (EPublic == "") {
      errMessage += "Please enter public end time\n";
      errorFlag = true;
    }
    console.log(errMessage);
    console.log(errorFlag);

    if (!errorFlag) {
      const { saleAddress, amount, decimal } = this.state;
      const { signer } = this.props;
      if (saleAddress && amount) {
        this.setState({ approving: true });
        await approveAnyToken(saleAddress, String(amount), decimal, signer);
        await this.checkAllowance();
        this.setState({ approving: false });
      }
    } else {
      toast.error(`${errMessage}`, {
        position: "top-right",
      });
    }
  };
  create = async () => {
    try {
      const { signer, address } = this.props;

      this.setState({ creating: true });
      let tokenValues = {
        total_sale: this.state.amount,
        public_allocation: this.state.pamount,
        public_per_wallet: this.state.publicperwallet,
      };
      let payload = {
        data: {
          name: this.state.projName,
          desc: this.mdEditor.getMdValue(),
          cover_image: this.state.Image_Hash,
          price: this.state.cost,
          content: this.mdEditor.getMdValue(), //Unable to map
          decimal: this.state.decimal,
          total_sale: this.state.amountinusd,
          public_allocation: this.state.pamountinusd,
          stake_pool_id: this.state.stakePoolId,
          stake_type: this.state.stake,
          token_symbol: this.state.symbol,
          public_per_wallet: this.state.publicperwalletinusd,
          project_token_address: this.state.saleAddress,
          stake_start_time: Math.round(
            new Date(this.state.SStake).getTime() / 1000
          ),
          stake_end_time: Math.round(
            new Date(this.state.EStake).getTime() / 1000
          ),
          public_sale_start_time: Math.round(
            new Date(this.state.SPublic).getTime() / 1000
          ),
          public_sale_end_time: Math.round(
            new Date(this.state.EPublic).getTime() / 1000
          ),
          socail_media:
            '{\n  "twitter":"' +
            this.state.twitter +
            '","linkedin":"' +
            this.state.linkedin +
            '","instagram":"' +
            this.state.instagram +
            '","facebook":"' +
            this.state.facebook +
            '","medium":"' +
            this.state.medium +
            '","telegram":"' +
            this.state.telegram +
            '","reddit":"' +
            this.state.reddit +
            '","email":"' +
            this.state.email +
            '"\n}',
        },
      };
      await deployContract(payload, address, signer, tokenValues);
      this.setState({ creating: false });
    } catch (e) {
      this.setState({ creating: false });
    }
  };

  render() {
    //const [value, setValue] = React.useState("");
    const {
      projName,
      projDesc,
      Image_Hash,
      dropdown,
      stake,
      symbol,
      approving,
      creating,
      saleAddress,
      decimal,
      cost,
      amount,
      pamount,
      allowance,
      SStake,
      EStake,
      SPublic,
      EPublic,
      stakePoolId,
      publicperwallet,
      amountinusd,
      pamountinusd,
      publicperwalletinusd,
    } = this.state;

    return this.props.address !== this.props.address ? null : (
      <div className="mx-auto container  p-12 p-[115px]">
        <div className="divide-y-[0.5px] ">
          <p className="text-3xl">Create a new project</p>
        </div>

        <div className="mt-8 border-solid border-zinc-700 bg-zinc-900  border p-4 rounded-lg">
          <p className="mb-4 text-sm">Pick a Sale Type</p>
          <div className="relative inline-block text-left w-48">
            <div>
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                onClick={() => {
                  this.setState({ dropdown: !this.state.dropdown });
                }}
              >
                {stake ? "Stake Type" : "Whitelist Type"}
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            {dropdown && (
              <div
                className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-[100]"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1" role="none">
                  <button
                    onClick={() => {
                      this.setState({ stake: false, dropdown: false });
                    }}
                    className="text-gray-700 block w-full text-left px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-3"
                  >
                    Whitelist
                  </button>
                  <button
                    onClick={() => {
                      this.setState({ stake: true, dropdown: false });
                    }}
                    className="text-gray-700 block w-full text-left px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-3"
                  >
                    Stake Only
                  </button>
                </div>
              </div>
            )}
          </div>

          <p className="mb-4 mt-8 text-sm">Project Cover Image</p>
          <div
            id="file-upload"
            title="Drop Here Image or Click to upload the files"
          >
            <lable htmlFor="projectImage" id="projectImageLable">
              <Image
                id="im1"
                className="object-fit-cover"
                src={Image_Hash}
                alt=""
                width={300}
                height={150}
                onLoad={async (e) => {
                  document.getElementById("im1").layout = "cover";
                  // document.getElementById("projectImage").style.display = "none";
                }}
              />
            </lable>
            <input
              className="p-3 w-full rounded-xl outline:none bg-primary text-gray-100"
              id="projectImage"
              type="file"
              accept="image/*"
              name="projectImage"
              onChange={async (e) => {
                // setIsUploadFile(true);
                var res = await pinDirectoryToIPFS(e.target.files);
                let hash = "";
                if (res.status === 200) {
                  hash =
                    "https://gateway.pinata.cloud/ipfs/" + res.data.IpfsHash;
                  this.setState({ Image_Hash: hash });
                } else {
                  //alert("File to upload the  Image");
                }
              }}
            />
          </div>
        </div>
        <div className="mt-8">
          <p className="mb-4 text-sm">Project Description</p>
          <div className="form-Box border-solid border-zinc-700 bg-zinc-900 border p-4 rounded-lg">
            <div className="" id="project-details">
              <lable htmlFor="projectName">
                <span className="span-1">Project Name</span>
                <span className="span-2">(in 5 words)</span>
              </lable>
              <input
                className="p-3 mb-5 w-full rounded-xl outline:none bg-primary text-gray-100"
                id="projectName"
                placeholder="Eg: XYZ...."
                value={projName}
                onChange={(e) => {
                  this.setState({ projName: e.target.value });
                }}
              />
              <lable htmlFor="projectDescription">
                <span className="span-1">Project Description</span>
              </lable>

              <MdEditor
                ref={(node) => {
                  this.mdEditor = node;
                }}
                style={{ height: "400px", backgroundColor: "#111" }}
                renderHTML={this.renderHTML}
                config={{
                  view: {
                    menu: true,
                    md: true,
                    html: true,
                  },
                }}
                onChange={this.handleEditorChange}
                onImageUpload={this.handleImageUpload}
              />

              {/* <input
                className="p-3 mb-5 w-full rounded-xl outline:none bg-primary text-gray-100"
                id="projectDescription"
                placeholder="description"
                value={projDesc}
                onChange={(e) => {
                  this.setState({ projDesc: e.target.value });
                }}
              /> */}
            </div>
          </div>
          <p className="mb-4 text-sm mt-8">Token Details</p>
          <div className="form-Box border-solid border-zinc-700 bg-zinc-900 border p-4 rounded-lg">
            <div className="form-Box-sub">
              <lable htmlFor="contractAddress">
                <span className="span-1">Sale Token Contract Address</span>
              </lable>
              <input
                className="p-3 mb-5 w-full rounded-xl outline:none bg-primary text-gray-100"
                id="contractAddress"
                placeholder="Contract Address"
                value={saleAddress}
                onChange={async (e) => {
                  this.setState({ saleAddress: e.target.value }, () => {
                    this.checkAllowance();
                  });
                  if (e.target.value !== "") {
                    let symbol = await getTokenSymbol(e.target.value);
                    let decimal = await getTokenDecimal(e.target.value);

                    this.setState({ decimal: decimal, symbol: symbol });

                    //TODO @Hemath map the symbol and decimal to text box
                  }
                }}
              />
            </div>
            <div className="form-Box-sub">
              <lable htmlFor="costPerToken">
                <span className="span-1">Cost Per Token</span>
                <span className="span-2">(in $USD)</span>
              </lable>
              <input
                className="p-3 mb-5 w-full rounded-xl outline:none bg-primary text-gray-100"
                id="costPerToken"
                placeholder="$USD"
                type="text"
                pattern="[0-9]"
                value={cost}
                onChange={(e) => {
                  if (
                    e.target.value >= 0 &&
                    e.target.value != null
                    // e.target.value - Math.floor(e.target.value) == 0
                  ) {
                    this.setState({ cost: e.target.value });
                  }
                }}
              />
            </div>
            <div className="form-Box-sub">
              <lable htmlFor="saleTokenDecimal">
                <span className="span-1">Sale Token Decimal</span>
              </lable>
              <input
                className="p-3 mb-5 w-full rounded-xl outline:none bg-primary text-gray-100"
                id="saleTokenDecimal"
                placeholder="(0 to 18)"
                type="number"
                disabled={true}
                value={decimal}
                onBlur={() => this.checkAllowance()}
              />
            </div>
            <div className="form-Box-sub">
              <lable htmlFor="saleTokenDecimal">
                <span className="span-1">Sale Token Symbol</span>
              </lable>
              <input
                className="p-3 mb-5 w-full rounded-xl outline:none bg-primary text-gray-100"
                id="saleTokenDecimal"
                placeholder="$MKTX"
                disabled={true}
                type="text"
                value={"$" + this.state.symbol}
              />
            </div>
          </div>
          <p className="mb-4 text-sm mt-8">Sale Amounts</p>
          <div className="form-Box border-solid border-zinc-700 bg-zinc-900 border p-4 rounded-lg">
            <div className="form-Box-sub">
              <lable htmlFor="totalSaleAmount">
                <span className="span-1">Total Sale</span>
                <span className="span-2"></span>
              </lable>
              <input
                className="p-3 mb-5 w-full rounded-xl outline:none bg-primary text-gray-100"
                id="totalSaleAmount"
                placeholder="$USD"
                type="text"
                pattern="[0-9]"
                value={amountinusd}
                onChange={(e) => {
                  if (
                    e.target.value >= 0 &&
                    e.target.value != null
                    // parseInt(e.target.value) - Math.floor(parseInt(e.target.value)) == 0
                  ) {
                    this.setState({
                      amountinusd: e.target.value,
                      amount:
                        e.target.value && cost ? e.target.value / cost : "",
                    });
                  }
                }}
              />
            </div>
            <div className="form-Box-sub">
              <lable htmlFor="saleTokens">
                <span className="span-1A">Sale Tokens</span>
              </lable>
              <input
                className="p-3 mb-5 w-full rounded-xl outline:none bg-primary text-gray-100"
                id="saleTokens"
                placeholder="0.0"
                disabled={true}
                value={amount}
                //    onChange={(e) => {
                //    this.setState({ amount: e.target.value });
                //  }}
              />
            </div>

            <div className="form-Box-sub">
              <lable htmlFor="publicAllocation">
                <span className="span-1">Public Allocation</span>
                <span className="span-2">(in $USD)</span>
              </lable>
              <input
                className="p-3 mb-5 w-full rounded-xl outline:none bg-primary text-gray-100"
                id="Public Allocation"
                placeholder="$USD"
                type="text"
                pattern="[0-9]"
                value={pamountinusd}
                onChange={(e) => {
                  if (amount) {
                    if (e.target.value <= amount) {
                      if (
                        e.target.value >= 0 &&
                        e.target.value - Math.floor(e.target.value) == 0
                      ) {
                        this.setState({
                          pamountinusd: e.target.value,
                          pamount:
                            e.target.value && cost ? e.target.value / cost : 0,
                        });
                      }
                    } else {
                      //alert("public allocation cannot be greater than the total sale Amount");
                      this.setState({ pamount: 0 });
                    }
                  } else {
                    //alert("please fill in the total amount first");
                    this.setState({ pamount: 0 });
                  }
                }}
              />
            </div>
            <div className="form-Box-sub">
              <lable htmlFor="publicAllocatedTokens">
                <span className="span-1A">Public Allocated Tokens</span>
              </lable>
              <input
                className="p-3 mb-5 w-full rounded-xl outline:none bg-primary text-gray-100"
                id="Public Allocated Tokens"
                placeholder="Public Allocated Tokens"
                disabled={true}
                value={pamount}
                // onChange={(e) => {
                //   this.setState({ publicperwallet: e.target.value });
                // }}
              />
            </div>
            <div className="form-Box-sub">
              <lable htmlFor="publicAllowancePerWallet">
                <span className="span-1">Public Allowance/Wallet</span>
                <span className="span-2">(in $USD)</span>
              </lable>
              <input
                className="p-3 mb-5 w-full rounded-xl outline:none bg-primary text-gray-100"
                id="Public Allowance/Wallet"
                placeholder="$USD"
                type="number"
                value={publicperwalletinusd}
                onChange={(e) => {
                  this.setState({
                    publicperwalletinusd: e.target.value,
                    publicperwallet:
                      e.target.value && cost ? e.target.value / cost : "",
                  });
                }}
              />
            </div>
            <div className="form-Box-sub">
              <lable htmlFor="publicAllocatedTokensPerwallet">
                <span className="span-1A">
                  Public Allocated Tokens / wallet
                </span>
              </lable>
              <input
                className="p-3 mb-5 w-full rounded-xl outline:none bg-primary text-gray-100"
                id="publicAllocatedTokensPerwallet"
                placeholder="Public Allocated Tokens per wallet"
                disabled={true}
                value={publicperwallet}
                // onChange={(e) => {
                //   this.setState({ pamount: e.target.value });
                // }}
              />
            </div>
          </div>
          <p className="mb-4 text-sm mt-8">Timestamp Description</p>
          <div className="form-Box border-solid border-zinc-700 bg-zinc-900 border p-4 rounded-lg">
            <div className="form-Box-sub" id="time-Details">
              <div className="split-2">
                <div className="split-1">
                  <lable htmlFor="startTimestampForStaking">
                    <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                      Staking Start Time
                    </span>
                  </lable>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                      renderInput={(props) => <TextField {...props} />}
                      //label="StartTime For Public"
                      value={SStake} //change here
                      onChange={(newValue) => {
                        this.setState({ SStake: newValue });
                      }}
                      minDateTime={new Date()}
                    />
                  </LocalizationProvider>
                </div>
                <div className="split-1">
                  <lable htmlFor="stake_StartTime_In_Unix">
                    <span className="span-1A">Stake StartTime (Unix)</span>
                  </lable>
                  <input
                    className="p-3 mb-5 w-full rounded-xl outline:none bg-primary text-gray-100"
                    id="stake_StartTime_In_Unix"
                    placeholder="Stake Start(Unix)"
                    disabled={true}
                    value={SStake ? new Date(SStake).getTime() / 1000 : ""}
                  />
                </div>
                <div className="split-1">
                  <lable htmlFor="endTimestampForStaking">
                    <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                      Staking End Time
                    </span>
                  </lable>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                      renderInput={(props) => <TextField {...props} />}
                      //label="StartTime For Public"
                      value={EStake} //change here
                      onChange={(newValue) => {
                        this.setState({ EStake: newValue });
                      }}
                      minDateTime={new Date(SStake).getTime() + 5 * 60000}
                    />
                  </LocalizationProvider>
                </div>
                <div className="split-1">
                  <lable htmlFor="stake_EndTime_In_Unix">
                    <span className="span-1A">Stake EndTime (Unix)</span>
                  </lable>
                  <input
                    className="p-3 mb-5 w-full rounded-xl  bg-primary text-gray-100"
                    id="stake_EndTime_In_Unix"
                    placeholder="Stake End(Unix)"
                    disabled={true}
                    value={EStake ? new Date(EStake).getTime() / 1000 : ""}
                  />
                </div>
              </div>
            </div>
            <div className="form-Box-sub" id="time-Details">
              <div className="split-2">
                <div className="split-1">
                  <lable htmlFor="startTimestampForPublic">
                    <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                      Public Start Time
                    </span>
                  </lable>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                      renderInput={(props) => <TextField {...props} />}
                      //label="StartTime For Public"
                      value={SPublic} //change here
                      onChange={(newValue) => {
                        this.setState({ SPublic: newValue });
                      }}
                      minDateTime={new Date(SStake).getTime() + 15 * 60000}
                    />
                  </LocalizationProvider>
                </div>
                <div className="split-1">
                  <lable htmlFor="public_StartTime_In_Unix">
                    <span className="span-1A">Public StartTime (Unix)</span>
                  </lable>
                  <input
                    className="p-3 mb-5 w-full rounded-xl outline:none bg-primary text-gray-100"
                    id="public_EndTime_In_Unix"
                    placeholder="Public Start(Unix)"
                    disabled={true}
                    value={SPublic ? new Date(SPublic).getTime() / 1000 : ""}
                  />
                </div>
                <div className="split-1" style={{ paddingBottom: "20px" }}>
                  <lable htmlFor="endTimestampForPublic">
                    <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                      Public End Time
                    </span>
                  </lable>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                      renderInput={(props) => <TextField {...props} />}
                      //label="StartTime For Public"
                      value={EPublic} //change here
                      onChange={(newValue) => {
                        this.setState({ EPublic: newValue });
                      }}
                      minDateTime={new Date(SPublic).getTime() + 5 * 60000}
                    />
                  </LocalizationProvider>
                  {/* <input
                    className="p-3 mb-5 w-full rounded-xl outline:none bg-primary text-gray-100"
                    id="endTimestampForPublic"
                    placeholder="Public End Timestamp Unix"
                    type='text'
                    onFocus={(e) => {
                      e.currentTarget.type = 'time';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.type = 'text';
                    }}
                    // value={end}
                    // onChange={(e) => {
                    //   this.setState({ end: e.target.value });
                    // }}
                  /> */}
                </div>
                <div className="split-1">
                  <lable htmlFor="public_EndTime_In_Unix">
                    <span className="span-1A">Public EndTime (Unix)</span>
                  </lable>
                  <input
                    className="p-3 mb-5 w-full rounded-xl outline:none bg-primary text-gray-100"
                    id="public_EndTime_In_Unix"
                    placeholder="Public End(Unix)"
                    disabled={true}
                    value={EPublic ? new Date(EPublic).getTime() / 1000 : ""}
                  />
                </div>
              </div>
            </div>
          </div>

          {stake && (
            <div>
              <p className="mb-4 text-sm mt-8">Staking Pool</p>
              <div className="form-Box border-solid border-zinc-700 bg-zinc-900 border p-4 rounded-lg">
                <lable htmlFor="totalSaleAmount">
                  <span className="span-1">Stake PoolId </span>
                  <span className="span-2"></span>
                </lable>

                <div>
                  <FormControl sx={{ m: 1, minWidth: 80 }} className="dropdown">
                    <InputLabel id="stakeidlabel" className="drop-label">
                      Stake ID
                    </InputLabel>
                    <Select
                      labelId="stakeidlabel"
                      id="stakeidselect"
                      value={this.state.stakeid}
                      onChange={this.handleStakeidChange}
                      label="Stake ID"
                    >
                      {this.state.stakeIdList.map((i) => {
                        return (
                          <MenuItem key={i.id} value={i.id}>
                            {i.symbol}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
          )}
          <p className="mb-4 text-sm mt-8">Social Links</p>
          <div className="form-Box border-solid border-zinc-700 bg-zinc-900 border p-4 rounded-lg">
            <div className="form-Box-sub" id="time-Details">
              <div className="split-2">
                <div className="split-1">
                  <lable htmlFor="twitter">
                    <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                      Twitter
                    </span>
                  </lable>
                  <input
                    className="p-3 mb-5 w-full rounded-xl outline:none bg-primary text-gray-100"
                    id="twitter"
                    placeholder="Twitter profile URL"
                    onChange={(e) => {
                      this.setState({ twitter: e.target.value });
                    }}
                  />
                </div>
                <div className="split-1">
                  <lable htmlFor="Linkedin">
                    <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                      Linkedin
                    </span>
                  </lable>
                  <input
                    className="p-3 mb-5 w-full rounded-xl outline:none bg-primary text-gray-100"
                    id="Linkedin"
                    placeholder="Linkedin profile URL"
                    onChange={(e) => {
                      this.setState({ linkedin: e.target.value });
                    }}
                    onBlur={(e) => {
                      this.setState({ linkedin: e.target.value });
                    }}
                  />
                </div>
                <div className="split-1">
                  <lable htmlFor="Instagram">
                    <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                      Instagram
                    </span>
                  </lable>
                  <input
                    className="p-3 mb-5 w-full rounded-xl outline:none bg-primary text-gray-100"
                    id="Instagram"
                    placeholder="Instagram profile URL"
                    onChange={(e) => {
                      this.setState({ instagram: e.target.value });
                    }}
                  />
                </div>
                <div className="split-1">
                  <lable htmlFor="Facebook">
                    <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                      Facebook
                    </span>
                  </lable>
                  <input
                    className="p-3 mb-5 w-full rounded-xl outline:none bg-primary text-gray-100"
                    id="Facebook"
                    placeholder="Facebook profile URL"
                    onChange={(e) => {
                      this.setState({ facebook: e.target.value });
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="form-Box-sub" id="time-Details">
              <div className="split-2">
                <div className="split-1">
                  <lable htmlFor="Medium">
                    <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                      Medium
                    </span>
                  </lable>
                  <input
                    className="p-3 mb-5 w-full rounded-xl outline:none bg-primary text-gray-100"
                    id="Medium"
                    placeholder="Medium URL"
                    onChange={(e) => {
                      this.setState({ medium: e.target.value });
                    }}
                  />
                </div>
                <div className="split-1">
                  <lable htmlFor="Telegram">
                    <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                      Telegram
                    </span>
                  </lable>
                  <input
                    className="p-3 mb-5 w-full rounded-xl outline:none bg-primary text-gray-100"
                    id="Telegram"
                    placeholder="Telegram URL"
                    onChange={(e) => {
                      this.setState({ telegram: e.target.value });
                    }}
                  />
                </div>
                <div className="split-1">
                  <lable htmlFor="Reddit">
                    <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                      Reddit
                    </span>
                  </lable>
                  <input
                    className="p-3 mb-5 w-full rounded-xl outline:none bg-primary text-gray-100"
                    id="Reddit"
                    placeholder="Reddit URL"
                    onChange={(e) => {
                      this.setState({ reddit: e.target.value });
                    }}
                  />
                </div>
                <div className="split-1">
                  <lable htmlFor="Email">
                    <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                      Email
                    </span>
                  </lable>
                  <input
                    className="p-3 mb-5 w-full rounded-xl outline:none bg-primary text-gray-100"
                    id="Email"
                    placeholder="Email address"
                    onChange={(e) => {
                      this.setState({ email: e.target.value });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <button
            onClick={() => this.approve()}
            disabled={approving || Number(allowance) >= Number(amount)}
            className="blue-button mt-6 mr-5 w-48 p-3 rounded-xl"
          >
            {approving ? "Approving Tokens..." : "Approve Tokens"}
          </button>
          <button
            onClick={() => this.create()}
            disabled={creating || Number(allowance) < Number(amount)}
            className="blue-button mt-6 w-48 p-3 rounded-xl"
          >
            {creating ? "Creating Project..." : "Create Project"}
          </button>
          <button
            onClick={() =>
              setStackingContract(
                "0x8FA5B77176C6D2067aeCAf0D7eA46E9980f6D518",
                this.props.signer
              )
            }
            className="blue-button mt-6 w-48 p-3 rounded-xl"
          >
            set staking contract
          </button>
        </div>
      </div>
    );
  }
}

export default CreateProject;
