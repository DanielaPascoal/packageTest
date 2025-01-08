var _oTPC;

modelMultiModel.setData({
    items: [
        { firstName: "Peter", lastName: "Mueller", size: "1.75", city: "Walldorf" },
        { firstName: "Petra", lastName: "Maier", size: "1.85", city: "Walldorf" },
        { firstName: "Thomas", lastName: "Smith", size: "1.95", city: "Walldorf" },
        { firstName: "John", lastName: "Williams", size: "1.65", city: "Walldorf" },
        { firstName: "Maria", lastName: "Jones", size: "1.55", city: "Walldorf" },
    ],
});

sap.ui.require(
    [
        "sap/m/p13n/Engine",
        // "sap/ui/core/mvc/Controller",
        "sap/ui/fl/variant/VariantManagement",
    ],
    (Engine,  VariantManagement) => {
        //, JSONModel, SelectionController, SortController, GroupController, MetadataHelper, Sorter)

        console.log(Engine);
        console.log(VariantManagement);

       let variant = new sap.ui.fl.variants.VariantManagement("variants", { 
        "for": persoTable 
       });


    console.log(variant)
    
    // variant.addFor(persoTable);

    // variant.addFor("persoTable")


 
    }
);

// sap.ui.require(["sap/m/TablePersoController"], (TablePersoController) => {
//     console.log(TablePersoController);
//     //console.log(MetadataHelper);

//     var DemoPersoService = {
//         oData: {
//             _persoSchemaVersion: "1.0",
//             aColumns: [
//                 // {
//                 //     id: "demoApp-productsTable-productCol",
//                 //     order: 2,
//                 //     text: "Product",
//                 //     visible: true,
//                 // },
//                 {
//                     id: "demoApp-testTable-firstName",
//                     order: 1,
//                     text: "First Name",
//                     visible: true,
//                 },
//                 {
//                     id: "demoApp-testTable-lastName",
//                     order: 0,
//                     text: "Last Name",
//                     visible: false,
//                 },
//                 {
//                     id: "demoApp-testTable-city",
//                     order: 3,
//                     text: "City",
//                     visible: false,
//                 },
//                 {
//                     id: "demoApp-testTable-size",
//                     order: 4,
//                     text: "Size",
//                     visible: false,
//                 },
//             ],
//         },

//         //     oResetData: {
//         //         _persoSchemaVersion: "1.0",
//         //         aColumns: [
//         //             {
//         //                 id: "demoApp-productsTable-productCol",
//         //                 order: 0,
//         //                 text: "First Name",
//         //                 visible: true
//         //             },
//         //             {
//         //                 id: "demoApp-testTable-firstName",
//         //                 order: 1,
//         //                 text: "Last Name",
//         //                 visible: false
//         //             },
//         //             {
//         //                 id: "demoApp-testTable-lastName",
//         //                 order: 4,
//         //                 text: "Dimensions",
//         //                 visible: false
//         //             },
//         //             {
//         //                 id: "demoApp-testTable-city",
//         //                 order: 2,
//         //                 text: "City",
//         //                 visible: false
//         //             },
//         //             {
//         //                 id: "demoApp-testTable-size",
//         //                 order: 3,
//         //                 text: "Size",
//         //                 visible: false
//         //             }
//         //         ]
//         //     },

//         getPersData: function () {
//             var oDeferred = new jQuery.Deferred();
//             if (!this._oBundle) {
//                 this._oBundle = this.oData;
//             }
//             oDeferred.resolve(this._oBundle);
//             // setTimeout(function() {
//             // 	oDeferred.resolve(this._oBundle);
//             // }.bind(this), 2000);
//             return oDeferred.promise();
//         },

//         setPersData: function (oBundle) {
//             console.log('setPersData');
//             console.log(oBundle);
//             var oDeferred = new jQuery.Deferred();
//             this._oBundle = oBundle;
//             oDeferred.resolve();
//             return oDeferred.promise();
//         },

//         //     getResetPersData: function () {
//         //         var oDeferred = new jQuery.Deferred();

//         //         // oDeferred.resolve(this.oResetData);

//         //         setTimeout(function () {
//         //             oDeferred.resolve(this.oResetData);
//         //         }.bind(this), 2000);

//         //         return oDeferred.promise();
//         //     },

//         //     resetPersData: function () {
//         //         var oDeferred = new jQuery.Deferred();

//         //         //set personalization
//         //         this._oBundle = this.oResetData;

//         //         //reset personalization, i.e. display table as defined
//         //         //this._oBundle = null;

//         //         oDeferred.resolve();

//         //         // setTimeout(function() {
//         //         // 	this._oBundle = this.oResetData;
//         //         // 	oDeferred.resolve();
//         //         // }.bind(this), 2000);

//         //         return oDeferred.promise();
//         //     },

//         //     //this caption callback will modify the TablePersoDialog' entry for the 'Weight' column
//         //     //to 'Weight (Important!)', but will leave all other column names as they are.
//         //     getCaption: function (oColumn) {
//         //         if (oColumn.getHeader() && oColumn.getHeader().getText) {
//         //             if (oColumn.getHeader().getText() === "Weight") {
//         //                 return "Weight (Important!)";
//         //             }
//         //         }
//         //         return null;
//         //     },

//         //     // getGroup: function (oColumn) {
//         //     //     if (oColumn.getId().indexOf('productCol') != -1 ||
//         //     //         oColumn.getId().indexOf('supplierCol') != -1) {
//         //     //         return "Primary Group";
//         //     //     }
//         //     //     return "Secondary Group";
//         //     // }
//     };

//     _oTPC = new TablePersoController({
//         table: "testTable",
//         //specify the first part of persistence ids e.g. 'demoApp-productsTable-dimensionsCol'
//         componentName: "demoApp",
//         persoService: DemoPersoService,
//     }).activate();

//     console.log(_oTPC);
// });
