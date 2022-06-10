"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Text_1 = require("../../atoms/Text/Text");
var TransfersTableStyle_1 = require("./TransfersTableStyle");
// import Pagination from '../Pagination/Pagination';
var react_redux_1 = require("react-redux");
var DashboardAction_1 = require("../../../redux/actions/DashboardAction");
var TransfersTable = function () {
    var _a = react_1.useState(false), toggleDetailsModal = _a[0], setToggleDetailsModal = _a[1];
    var page = react_1.useState(1)[0];
    var dispatch = react_redux_1.useDispatch();
    // const dashboardState = useSelector( (state:RootStore) => state.dashboardReducer);
    react_1.useEffect(function () {
        dispatch(DashboardAction_1.DashboardActions("/transfer?perPage=10&page=" + page));
    }, [dispatch, page]);
    // const setPagination = (value: number) => {
    //   setPage(value)
    // }
    var showDetailsModal = function () {
        setToggleDetailsModal(true);
    };
    // const hideDetailsModal = () => {
    //   setToggleDetailsModal(false)
    // }
    var renderDetailsModal = function () {
        if (toggleDetailsModal) {
            return (react_1["default"].createElement(react_1["default"].Fragment, null));
        }
    };
    // const renderTableRow = () => {
    //   let responses = dashboardState.results?.data.map((response: Record<any, any>,key: number) => {
    //     return(
    //       <tr className={`table-row`}>
    //         <td> Sept 04, 2021 </td>
    //         <td> Eigege Samantha </td>
    //         <td> Kuda </td>
    //         <td> 0918390229 </td>
    //         <td> ₦60,000 </td>
    //         <td> NIBSS Instant Payment Outward </td>
    //         <td> 
    //           <button className={`button`} onClick={() => showDetailsModal()}> View Details </button>
    //         </td>
    //       </tr>
    //     )
    //   })
    //   return responses
    // }
    return (react_1["default"].createElement(TransfersTableStyle_1["default"], null,
        renderDetailsModal(),
        react_1["default"].createElement("div", { className: "container-full" },
            react_1["default"].createElement("table", null,
                react_1["default"].createElement("thead", null,
                    react_1["default"].createElement("tr", { className: "table-header" },
                        react_1["default"].createElement("th", null,
                            react_1["default"].createElement(Text_1["default"], { value: "Date", className: "table-title" })),
                        react_1["default"].createElement("th", null,
                            react_1["default"].createElement(Text_1["default"], { value: "Account Name", className: "table-title" })),
                        react_1["default"].createElement("th", null,
                            react_1["default"].createElement(Text_1["default"], { value: "Bank", className: "table-title" })),
                        react_1["default"].createElement("th", null,
                            react_1["default"].createElement(Text_1["default"], { value: "Account Number", className: "table-title" })),
                        react_1["default"].createElement("th", null,
                            react_1["default"].createElement(Text_1["default"], { value: "Amount Transferred", className: "table-title" })),
                        react_1["default"].createElement("th", null,
                            react_1["default"].createElement(Text_1["default"], { value: "Narration", className: "table-title" })),
                        react_1["default"].createElement("th", null,
                            react_1["default"].createElement(Text_1["default"], { value: "Action", className: "table-title" })))),
                react_1["default"].createElement("tbody", { className: "table-body" },
                    react_1["default"].createElement("tr", { className: "table-row" },
                        react_1["default"].createElement("td", null, " Sept 04, 2021 "),
                        react_1["default"].createElement("td", null, " Eigege Samantha "),
                        react_1["default"].createElement("td", null, " Kuda "),
                        react_1["default"].createElement("td", null, " 0918390229 "),
                        react_1["default"].createElement("td", null, " \u20A660,000 "),
                        react_1["default"].createElement("td", null, " NIBSS Instant Payment Outward "),
                        react_1["default"].createElement("td", null,
                            react_1["default"].createElement("button", { className: "button", onClick: function () { return showDetailsModal(); } }, " View Details "))))))));
};
exports["default"] = TransfersTable;
