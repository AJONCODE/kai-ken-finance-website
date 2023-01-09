import { useState } from "react"
import Image from "next/image"
import BounceLoader from "react-spinners/BounceLoader"
import Metamask from "../assets/icons/metamask.svg"
import Coinbase from "../assets/icons/coinbase.svg"
import WC from "../assets/icons/walletconnect.svg"

function WalletConnect(props) {     
    const [type, setType] = useState("")
    const {modal, connected, address, connecting} = props;
    return(
        modal 
        ? <div aria-labelledby="modal-title" aria-modal="true" className="fixed z-10 inset-0 overflow-y-auto" role="dialog">
          <div className="grid items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div aria-hidden="true" className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => props.close()}></div>
        
            <span aria-hidden="true" className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
        
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-primary-light px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  {connected ? 
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-xl font-medium text-white text-center" id="modal-title">
                      Wallet Connected  to {type}
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-center text-gray-500">
                        {address}
                      </p>
                    </div>
                    <div className="mt-6 flex flex-col">
                        <button className="text-white mb-4 bg-gray rounded-xl p-4" onClick={() => props.disconnect()}>
                          Disconnect Wallet
                        </button>
                    </div>
                  </div>
                  :
                  <div className="bg-primary-light px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-xl font-medium text-white text-center" id="modal-title">
                      Connect Wallet
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-center text-gray-500">
                       By connecting your wallet, you agree to our Terms & Conditions
                      </p>
                    </div>
                    <div className="mt-6 flex flex-col">
                        <button className="text-white mb-4 bg-gray rounded-xl p-4" 
                            onClick={
                              () => {
                                setType("metamask")
                                props.connect("metamask")
                              }
                            }>
                            {
                            type === "metamask" && connecting 
                            ? 
                            <><BounceLoader color="white" size="21" /> <p>Continue to your metamask</p> </> 
                            :
                            <div className="flex justify-center	items-center">
                              <Image src={Metamask} alt="metamask"/>
                              <p className="pl-4">Metamask</p>
                            </div> 
                            }
                        </button>
                    </div>
                    <div className="mt-2 flex flex-col">
                        <button className="text-white mb-4 bg-gray rounded-xl p-4" onClick={
                              () => {
                                setType("walletconnect")
                                props.connect("walletconnect")
                              }
                            }>
                            {
                            type === "walletconnect" && connecting 
                            ? 
                            <><BounceLoader color="white" size="21" /> <p>Continue to your wallet connect</p> </> 
                            : 
                            <div className="flex justify-center	items-center">
                              <Image src={WC} height={30} width={30} alt="wallet-connect"/>
                              <p className="pl-4">Wallet Connect</p>
                            </div> 
                            }
                        </button>
                    </div>
                    <div className="mt-2 flex flex-col">
                        <button className="text-white mb-4 bg-gray rounded-xl p-4" onClick={
                              () => {
                                setType("coinbase")
                                props.connect("coinbase")
                              }
                            }>
                            {
                            type === "coinbase" && connecting 
                            ? 
                            <><BounceLoader color="white" size="21" /> <p>Continue to your coinbase wallet</p> </> 
                            :
                            <div className="flex justify-center	items-center">
                              <Image src={Coinbase} alt="coinbase-wallet"/>
                              <p className="pl-4">Coinbase Wallet</p>
                            </div> 
                            }
                        </button>
                    </div>
                  </div>
                  </div>
                  }
                </div>
              </div>
              <div className="bg-primary-light px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button onClick={() => this.props.showModal()} className="w-full inline-flex rounded-xl shadow-sm px-4 py-2 text-base font-medium text-white hover:text-red-600 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm" type="button">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        : null
    )
}

export default WalletConnect;

