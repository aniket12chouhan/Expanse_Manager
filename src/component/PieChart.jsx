import React from 'react'
import { useSelector } from 'react-redux'
import ChartSection from './ChartSection'

const PieChart = () => {

    const { TotalIncome, TotalExpense } = useSelector(state => state.expense)

    const NetBalance = TotalIncome - TotalExpense

    return (
        <div class="pie-chart-section" id='ANALYTICS'>

            <div class="transction-section">


                {/* <!-- CURRENT INCOME --> */}

                <div class="card">
                    <div class="title">
                        <span class="green">
                            <svg id="changeColor" fill="#DC7633" xmlns="http://www.w3.org/2000/svg"
                                xmlns: xlink="http://www.w3.org/1999/xlink" width="200" zoomAndPan="magnify"
                                viewBox="0 0 375 374.9999" height="200" version="1.0">
                                <defs>
                                    <path id="pathAttribute"
                                        d="M 11.972656 11.972656 L 359.222656 11.972656 L 359.222656 359.222656 L 11.972656 359.222656 Z M 11.972656 11.972656 "
                                        fill="green"></path>
                                </defs>
                                <g>
                                    <path id="pathAttribute"
                                        d="M 185.597656 359.222656 C 89.675781 359.222656 11.972656 280.984375 11.972656 185.597656 C 11.972656 90.210938 89.675781 11.972656 185.597656 11.972656 C 281.519531 11.972656 359.222656 89.675781 359.222656 185.597656 C 359.222656 281.519531 280.984375 359.222656 185.597656 359.222656 Z M 185.597656 22.691406 C 95.570312 22.691406 22.691406 95.570312 22.691406 185.597656 C 22.691406 275.625 95.570312 348.503906 185.597656 348.503906 C 275.625 348.503906 348.503906 275.625 348.503906 185.597656 C 348.503906 95.570312 275.089844 22.691406 185.597656 22.691406 Z M 185.597656 22.691406 "
                                        fill-opacity="1" fill-rule="nonzero" fill="green"></path>
                                </g>
                                <g id="inner-icon" transform="translate(85, 75)"> <svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" id="IconChangeColor"
                                    height="199.8"
                                    width="199.8">
                                    {/* <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --> */}
                                    <path
                                        d="M.0022 64C.0022 46.33 14.33 32 32 32H288C305.7 32 320 46.33 320 64C320 81.67 305.7 96 288 96H231.8C241.4 110.4 248.5 126.6 252.4 144H288C305.7 144 320 158.3 320 176C320 193.7 305.7 208 288 208H252.4C239.2 266.3 190.5 311.2 130.3 318.9L274.6 421.1C288.1 432.2 292.3 452.2 282 466.6C271.8 480.1 251.8 484.3 237.4 474L13.4 314C2.083 305.1-2.716 291.5 1.529 278.2C5.774 264.1 18.09 256 32 256H112C144.8 256 173 236.3 185.3 208H32C14.33 208 .0022 193.7 .0022 176C.0022 158.3 14.33 144 32 144H185.3C173 115.7 144.8 96 112 96H32C14.33 96 .0022 81.67 .0022 64V64z"
                                        id="mainIconPathAttribute" fill="green" stroke-width="0.1" stroke="#ff0000">
                                    </path>
                                </svg> </g>
                            </svg>
                        </span>
                        <p class="title-text">
                            TOTAL INCOME
                        </p>

                    </div>
                    <div class="data">
                        <p>
                            ₹{TotalIncome}
                        </p>

                    </div>
                </div>



                {/* <!-- CURRENT EXPENSE --> */}

                <div class="card">
                    <div class="title">
                        <span class=" span-expense">
                            <svg id="changeColor" fill="#DC7633" xmlns="http://www.w3.org/2000/svg"
                                xmlns: xlink="http://www.w3.org/1999/xlink" width="200" zoomAndPan="magnify"
                                viewBox="0 0 375 374.9999" height="200" version="1.0">
                                <defs>
                                    <path id="pathAttribute"
                                        d="M 11.972656 11.972656 L 359.222656 11.972656 L 359.222656 359.222656 L 11.972656 359.222656 Z M 11.972656 11.972656 "
                                        fill="#ff0000"></path>
                                </defs>
                                <g>
                                    <path id="pathAttribute"
                                        d="M 185.597656 359.222656 C 89.675781 359.222656 11.972656 280.984375 11.972656 185.597656 C 11.972656 90.210938 89.675781 11.972656 185.597656 11.972656 C 281.519531 11.972656 359.222656 89.675781 359.222656 185.597656 C 359.222656 281.519531 280.984375 359.222656 185.597656 359.222656 Z M 185.597656 22.691406 C 95.570312 22.691406 22.691406 95.570312 22.691406 185.597656 C 22.691406 275.625 95.570312 348.503906 185.597656 348.503906 C 275.625 348.503906 348.503906 275.625 348.503906 185.597656 C 348.503906 95.570312 275.089844 22.691406 185.597656 22.691406 Z M 185.597656 22.691406 "
                                        fill-opacity="1" fill-rule="nonzero" fill="#ff0000"></path>
                                </g>
                                <g id="inner-icon" transform="translate(85, 75)"> <svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" id="IconChangeColor"
                                    height="199.8"
                                    width="199.8">
                                    {/* <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --> */}
                                    <path
                                        d="M.0022 64C.0022 46.33 14.33 32 32 32H288C305.7 32 320 46.33 320 64C320 81.67 305.7 96 288 96H231.8C241.4 110.4 248.5 126.6 252.4 144H288C305.7 144 320 158.3 320 176C320 193.7 305.7 208 288 208H252.4C239.2 266.3 190.5 311.2 130.3 318.9L274.6 421.1C288.1 432.2 292.3 452.2 282 466.6C271.8 480.1 251.8 484.3 237.4 474L13.4 314C2.083 305.1-2.716 291.5 1.529 278.2C5.774 264.1 18.09 256 32 256H112C144.8 256 173 236.3 185.3 208H32C14.33 208 .0022 193.7 .0022 176C.0022 158.3 14.33 144 32 144H185.3C173 115.7 144.8 96 112 96H32C14.33 96 .0022 81.67 .0022 64V64z"
                                        id="mainIconPathAttribute" fill="#ff0000"></path>
                                </svg> </g>
                            </svg>
                        </span>
                        <p class="title-text">
                            TOTAL EXPENSE
                        </p>

                    </div>
                    <div class="data">
                        <p>
                            ₹{TotalExpense}
                        </p>

                    </div>
                </div>

                {/* <!-- CURRENT BALANCE --> */}

                <div class="card">
                    <div class="title">
                        <span class="green">
                            <svg id="changeColor" fill="#DC7633" xmlns="http://www.w3.org/2000/svg"
                                xmlns: xlink="http://www.w3.org/1999/xlink" width="200" zoomAndPan="magnify"
                                viewBox="0 0 375 374.9999" height="200" version="1.0">
                                <defs>
                                    <path id="pathAttribute"
                                        d="M 11.972656 11.972656 L 359.222656 11.972656 L 359.222656 359.222656 L 11.972656 359.222656 Z M 11.972656 11.972656 "
                                        fill="green"></path>
                                </defs>
                                <g>
                                    <path id="pathAttribute"
                                        d="M 185.597656 359.222656 C 89.675781 359.222656 11.972656 280.984375 11.972656 185.597656 C 11.972656 90.210938 89.675781 11.972656 185.597656 11.972656 C 281.519531 11.972656 359.222656 89.675781 359.222656 185.597656 C 359.222656 281.519531 280.984375 359.222656 185.597656 359.222656 Z M 185.597656 22.691406 C 95.570312 22.691406 22.691406 95.570312 22.691406 185.597656 C 22.691406 275.625 95.570312 348.503906 185.597656 348.503906 C 275.625 348.503906 348.503906 275.625 348.503906 185.597656 C 348.503906 95.570312 275.089844 22.691406 185.597656 22.691406 Z M 185.597656 22.691406 "
                                        fill-opacity="1" fill-rule="nonzero" fill="green"></path>
                                </g>
                                <g id="inner-icon" transform="translate(85, 75)"> <svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" id="IconChangeColor"
                                    height="199.8"
                                    width="199.8">
                                    {/* <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --> */}
                                    <path
                                        d="M.0022 64C.0022 46.33 14.33 32 32 32H288C305.7 32 320 46.33 320 64C320 81.67 305.7 96 288 96H231.8C241.4 110.4 248.5 126.6 252.4 144H288C305.7 144 320 158.3 320 176C320 193.7 305.7 208 288 208H252.4C239.2 266.3 190.5 311.2 130.3 318.9L274.6 421.1C288.1 432.2 292.3 452.2 282 466.6C271.8 480.1 251.8 484.3 237.4 474L13.4 314C2.083 305.1-2.716 291.5 1.529 278.2C5.774 264.1 18.09 256 32 256H112C144.8 256 173 236.3 185.3 208H32C14.33 208 .0022 193.7 .0022 176C.0022 158.3 14.33 144 32 144H185.3C173 115.7 144.8 96 112 96H32C14.33 96 .0022 81.67 .0022 64V64z"
                                        id="mainIconPathAttribute" fill="green" stroke-width="0.1" stroke="#ff0000">
                                    </path>
                                </svg> </g>
                            </svg>
                        </span>
                        <p class="title-text">
                            NET BALANCE
                        </p>

                    </div>
                    <div class="data">
                        <p>
                            ₹{NetBalance}
                        </p>

                    </div>
                </div>



            </div>

            {/* <!-- react chart  --> */}
            <div class="chart-section">
                <ChartSection />
            </div>


        </div>
    )
}

export default PieChart