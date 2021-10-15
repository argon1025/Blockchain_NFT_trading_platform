import React, { Component } from "react";

export default class CautionModal extends Component {
  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    console.log("close Error Modal");
    this.props.closeErrorModal(this.props.ERROR_TARGET_PATH);
  }

  render() {
    const ERROR_STATE = this.props.ERROR;
    const ERROR_MSG = this.props.ERROR_MESSAGE;
    return (
      <div>
        {ERROR_STATE ? (
          <div className="flex fixed h-full w-full items-center justify-center bg-black bg-opacity-75 z-50">
            <div class="absolute">
              <div class="rounded-lg shadow-lg bg-white my-3">
                <div class="flex justify-between border-b border-gray-100 px-5 py-4">
                  <div className="flex flex-row inline-block align-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <span class="font-bold text-gray-700 text-lg">Error</span>
                  </div>
                  <div>
                    <button>
                      <i class="fa fa-times-circle text-red-500 hover:text-red-600 transition duration-150"></i>
                    </button>
                  </div>
                </div>

                <div class="px-10 py-5 text-gray-600">{ERROR_MSG}</div>

                <div class="px-5 py-4 flex justify-end">
                  <button
                    onClick={this.closeModal}
                    class="text-sm py-2 px-3 text-gray-500 hover:text-gray-600 transition duration-150"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
