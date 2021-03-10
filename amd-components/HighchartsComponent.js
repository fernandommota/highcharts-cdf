define([
    'highcharts',
    'highcharts/modules/exporting',
    'highcharts/modules/offline-exporting',
    'highcharts/modules/variable-pie',
], function(Highcharts, exporting, offlineExporting, variablePie) {
    // We need to initialize module files and pass in Highcharts
    exporting(Highcharts);
    offlineExporting(Highcharts);
    // variablePie(Highcharts);
    // Load exporting before accessibility
    //accessibility(Highcharts);

    //translation should be the last update in Highcharts object
    Highcharts.setOptions({
        exporting: {
            libURL: '../static/custom/libs/highcharts/lib',
            buttons: {
                contextButton: {
                    menuItems: ['printChart', 'downloadPDF', 'downloadPNG', 'downloadJPEG', 'downloadSVG']
                }
            }
        },
        lang: {
            months: [
                "Janeiro",
                "Fevereiro",
                "Março",
                "Abril",
                "Maio",
                "Junho",
                "Julho",
                "Agosto",
                "Setembro",
                "Outubro",
                "Novembro",
                "Dezembro"
            ],
            shortMonths: [
                "Jan",
                "Fev",
                "Mar",
                "Abr",
                "Mai",
                "Jun",
                "Jul",
                "Ago",
                "Set",
                "Out",
                "Nov",
                "Dez"
            ],
            weekdays: [
                "Domingo",
                "Segunda",
                "Terça",
                "Quarta",
                "Quinta",
                "Sexta",
                "Sábado"
            ],
            loading: ["Atualizando o gráfico...aguarde"],
            contextButtonTitle: "Exportar gráfico",
            decimalPoint: ",",
            thousandsSep: ".",
            downloadJPEG: "Baixar imagem JPEG",
            downloadPDF: "Baixar arquivo PDF",
            downloadPNG: "Baixar imagem PNG",
            downloadSVG: "Baixar vetor SVG",
            printChart: "Imprimir gráfico",
            rangeSelectorFrom: "De",
            rangeSelectorTo: "Para",
            rangeSelectorZoom: "Zoom",
            resetZoom: "Limpar zoom",
            resetZoomTitle: "Voltar Zoom para nível 1:1",
            noData: "Não há dados!",
            drillUpText: "< Voltar"
        }
    });

    return Highcharts;
});