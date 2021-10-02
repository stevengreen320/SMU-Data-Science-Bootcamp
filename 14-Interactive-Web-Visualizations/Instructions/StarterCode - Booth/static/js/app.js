$(document).ready(function() {
    // alert("Page Loaded");

    getData();
});

function getData() {
    let url = "samples.json";

    // AJAX
    $.ajax({
        type: "GET",
        url: url,
        contentType: "application/json",
        dataType: "json",
        success: function(data) {

            // DO WORK HERE
            console.log(data);
            buildDropdown(data);
            buildBarPlot(data);
        },
        error: function(data) {
            console.log("YOU BROKE IT!!");
        },
        complete: function(data) {
            console.log("Request finished");
        }
    });
}

function getData2() {
    let url = "samples.json";

    d3.json(url).then(function(data) {
        // DO WORK HERE
        console.log(data);
        buildDropdown(data);
        buildBarPlot(data);
    });
}

////////////////////// 5 Things Functions ///////////////////

function buildDropdown(data) {
    let names = data.names;

    // loop through names, create html, put into dropdown
    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        let html_option = `<option value="${name}">${name}</option>`;
        $("#selDataset").append(html_option);
    }
}

function buildBarPlot(data) {
    let curr_id = $("#selDataset").val();
    let curr_data = data.samples.filter(x => x.id === curr_id)[0];

    // create trace
    let trace1 = {
        x: curr_data.sample_values.slice(0, 10).reverse(),
        y: curr_data.otu_ids.map(x => `OTU ID: ${x}`).slice(0, 10).reverse(),
        text: curr_data.otu_labels.slice(0, 10).reverse(),
        name: "Bacteria Count",
        type: "bar",
        marker: {
            color: "purple"
        },
        orientation: 'h'
    };

    // Create data array
    let traces = [trace1];

    // Apply a title to the layout
    let layout = {
        title: "Bacteria Count in Belly Button",
        xaxis: {
            title: "Number of Bacteria"
        }
    };

    Plotly.newPlot('bar', traces, layout);
}