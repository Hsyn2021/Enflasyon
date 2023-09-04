document.getElementById("calculateBtn").addEventListener("click", function () {
    var PVInput = document.getElementById("pvInput").value.replace(/\./g, '').replace(',', '.');
    var PV = parseFloat(PVInput.replace(/\s+/g, '').replace(',', '.'));
    var startYear = parseInt(document.getElementById("startYear").value);
    var endYear = parseInt(document.getElementById("endYear").value);

    var enflasyonVerileri = {
        2020: 0.3672,
        2021: 0.82,
        2022: 1.3755,
        2023: 1.6855
    };

    var FV = PV;

    for (var year = startYear; year <= endYear; year++) {
        if (enflasyonVerileri[year]) {
            FV *= (1 + enflasyonVerileri[year]);
        }
    }

    var formattedResult = formatNumber(FV);

    document.getElementById("sonuc").innerHTML = "Gelecekteki Değer: " + formattedResult + " TL";
});

function formatNumber(number) {
    return number.toLocaleString("tr-TR", { maximumFractionDigits: 2 });
}

