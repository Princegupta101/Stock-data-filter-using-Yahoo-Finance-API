//news
const articles = [
  {
    title: "Apple Stock Surges on Positive Earnings Report",
    description:
      "Apple's stock rose 5% today after the company released its positive earnings report for the quarter.",
    link: "https://www.cnbc.com/2022/10/28/apple-stock-surges-on-pace-for-its-best-day-since-2020.html",
  },
  {
    title: "Tesla Announces Record-Breaking Sales Numbers",
    description:
      "Tesla's sales numbers for the quarter broke all previous records, causing its stock to soar.",
    link: "https://www.arenaev.com/tesla_announces_recordbreaking_sales_for_2022-news-1240.php",
  },
  {
    title: "Amazon Launches New Delivery Service",
    description:
      "Amazon's new delivery service promises faster and more efficient shipping for customers.",
    link: "https://www.businesstoday.in/technology/story/amazon-introduces-amazon-air-in-india-for-faster-deliveries-367111-2023-01-23",
  },
];

const container = document.querySelector(".container1");

articles.forEach((article) => {
  const articleDiv = document.createElement("container1");
  articleDiv.classList.add("article");

  const title = document.createElement("h2");
  title.innerText = article.title;
  articleDiv.appendChild(title);

  const description = document.createElement("p");
  description.innerText = article.description;
  articleDiv.appendChild(description);

  const link = document.createElement("a");
  link.href = article.link;
  link.innerText = "Read More";
  articleDiv.appendChild(link);

  container.appendChild(articleDiv);
});
//graph

var stockData = [
  [1572566400000, 50.22],
  [1572652800000, 50.43],
  [1572739200000, 51.31],
  [1572825600000, 50.29],
  [1572912000000, 50.98],
  [1573171200000, 51.31],
  [1573257600000, 52.03],
  [1573344000000, 52.15],
  [1573430400000, 51.32],
  [1573516800000, 50.8]
];
var options = {
  chart: {
    type: 'line',
    height: '100%'
  },
  title: {
    text: 'Stock Data'
  },
  xAxis: {
    type: 'datetime'
  },
  yAxis: {
    title: {
      text: 'Price'
    }
  },
  series: [{
    name: 'Price',
    data: stockData
  }]
};
var chart = Highcharts.chart('chart-container', options);
function updateData() {
  var now = Date.now();
  var lastDataPoint = stockData[stockData.length - 1];
  var newPrice = lastDataPoint[1] + Math.random() - 0.5;
  stockData.push([now, newPrice]);
  if (stockData.length > 10) {
    stockData.shift();
  }
  chart.update({
    series: [{
      data: stockData
    }]
  });
}
setInterval(updateData, 1000);
// cal
function calculateProfitLoss() {
  const fixedAmount = document.getElementById("fixedAmount").value;
  const purchasePrice = document.getElementById("purchasePrice").value;
  const currentPrice = document.getElementById("currentPrice").value;
 
  const profit = (( currentPrice-purchasePrice)/purchasePrice)*100;
  console.log(profit);
  // make a POST request to the server to calculate the profit or loss
   
      result.innerHTML = profit + "%";
      resultBox.style.display = "block";
   
  const data = JSON.stringify({ fixedAmount, purchasePrice, currentPrice });
  
}

function resetForm() {
  // hide the result box and reset the form
  const resultBox = document.getElementById("resultBox");
  resultBox.style.display = "none";
  document.getElementById("fixedAmount").value = "";
  document.getElementById("purchasePrice").value = "";
  document.getElementById("currentPrice").value = "";
}
//News

    
//  Filtering
const rb3 = (document.getElementById('Automoblie'))
function check() {
  
  const  rdb1=document.getElementById("Acadmics/Education");
  const  rdb2=document.getElementById("Agriculture");

  const  rdb4=document.getElementById("Banking");
  const  rdb6=document.getElementById("Healthcare");
  const  rdb7=document.getElementById("Industries");
  const  rdb8=document.getElementById("Itindustries");
  const rdb9=document.getElementById("Media/Entertrainment");
  const  rdb10=document.getElementById("RealEstate");
  // const api = "3148619249msh15a8cb72e96cf13p19b70fjsn4ea7d7696855";
  //  const api = "9aca414f55msh3a9e686b57e1336p142524jsn7bd727ee66a3";
  console.log(rdb1.checked);
  if(rdb1.checked ==true){
  
    const apiKey = api;
    const endpointUrl = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes';
    var STOCK_DATA = {}
    
    const companies = [
      { name: 'New Oriental Education & Techno', symbol: 'EDU' },
      { name: 'TAL Education Group	', symbol: 'TAL' },
      { name: 'Golden Sun Education Group Limi', symbol: 'GSUN' },
      { name: 'Barnes & Noble Education, Inc', symbol: 'BNED' },
      { name: 'Jianzhi Education Technology Gr', symbol: 'JZ' },
      { name: '17 Education & Technology Group', symbol: 'YQ' },
      { name: 'China Liberal Education Holding', symbol: 'CLEU' },
      { name: 'American Public Education, Inc.', symbol: 'APEI' },
      { name: 'Perdoceo Education Corporation', symbol: 'PRDO' },
      { name: 'Grand Canyon Education, Inc.', symbol: 'LOPE' },
      { name: 'Adtalem Global Education Inc.', symbol: 'ATGE' },
    ];
    
    function fetchStockPrices(symbols) {
      fetch(`${endpointUrl}?region=US&symbols=${symbols}`, {
        headers: {
          'x-rapidapi-key': apiKey,
          'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
      })
      .then(response => response.json())
      .then(data => {
       STOCK_DATA = data;
        const stockPricesElement = document.getElementById('stock-prices').getElementsByTagName('tbody')[0];
        companies.forEach(company => {
          const stockData = data.quoteResponse.result.find(result => result.symbol === company.symbol);
          const price = stockData.regularMarketPrice;
          const currency = stockData.currency;
          const row = stockPricesElement.insertRow();
          const nameCell = row.insertCell();
          const symbolCell = row.insertCell();
          const priceCell = row.insertCell();
          const currencyCell = row.insertCell();
          nameCell.innerHTML = company.name;
          symbolCell.innerHTML = stockData.symbol;
          priceCell.innerHTML = price;
          currencyCell.innerHTML = currency;
        });
      })
      .catch(error => console.log(error));
    }
    
    
    fetchStockPrices(companies.map(company => company.symbol).join(','));

  }
  else if(rdb2.checked ==true){
    // const api = "3148619249msh15a8cb72e96cf13p19b70fjsn4ea7d7696855"
    const apiKey = api;
    const endpointUrl = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes';
    var STOCK_DATA = {}
    
    const companies = [
      { name: 'Invesco DB Agriculture Fund', symbol: 'DBA' },
      { name: '	iShares MSCI Agriculture Produc', symbol: 'VEGI' },
      { name: 'China Green Agriculture, Inc.', symbol: 'CGA' },
      { name: 'Invesco Agriculture Commodity S', symbol: 'PDBA' },
      { name: 'WISDOMTREE AGRICULTURE	', symbol: 'ALGA.MI' },
      { name: 'BMO GLOBAL AGRICULTURE ETF', symbol: 'ZEAT.TO' },
      { name: '	THE HOUSE OF AGRICULTURE SPI', symbol: 'SPIR.AT' },
      { name: 'WisdomTree Agriculture', symbol: 'GBB00B51KYH63.SG' },
      { name: 'TRITENT INTL AGRICULTURE INC NE', symbol: 'UNMK' },
      { name: 'S&P GSCI Agriculture Enhanced S', symbol: '600598.SS' },
      { name: 'S&P GSCI Agriculture Index', symbol: '^SGECASP' },
      { name: 'Barings Global Agriculture Fund', symbol: '0P0000J1C2.L' },
      { name: 'CHAODA MODERN AGRICULTURE HLDGS', symbol: 'CMGHF' },
      { name: '	WISDOMTREE AGRICULTURE 2X DAILY', symbol: 'LAGR.MI' },
      { name: 'CHAODA MODERN AGRICULTURE HLDGS', symbol: 'CMGHY' },


    ];
    
    function fetchStockPrices(symbols) {
      fetch(`${endpointUrl}?region=US&symbols=${symbols}`, {
        headers: {
          'x-rapidapi-key': apiKey,
          'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
      })
      .then(response => response.json())
      .then(data => {
       STOCK_DATA = data;
        const stockPricesElement = document.getElementById('stock-prices').getElementsByTagName('tbody')[0];
        companies.forEach(company => {
          const stockData = data.quoteResponse.result.find(result => result.symbol === company.symbol);
          const price = stockData.regularMarketPrice;
          const currency = stockData.currency;
          const row = stockPricesElement.insertRow();
          const nameCell = row.insertCell();
          const symbolCell = row.insertCell();
          const priceCell = row.insertCell();
          const currencyCell = row.insertCell();
          nameCell.innerHTML = company.name;
          symbolCell.innerHTML = stockData.symbol;
          priceCell.innerHTML = price;
          currencyCell.innerHTML = currency;
        });
      })
      .catch(error => console.log(error));
    }
    
    
    fetchStockPrices(companies.map(company => company.symbol).join(','));
  }
 else if(rb3.checked ==true){
    // const api = "3148619249msh15a8cb72e96cf13p19b70fjsn4ea7d7696855"
    // const apiKey = '3148619249msh15a8cb72e96cf13p19b70fjsn4ea7d7696855';
    const apiKey = api;
    const endpointUrl = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes';
    var STOCK_DATA = {}
    
    const companies = [
      { name: 'PORSCHE AUTOMOBIL HOLDING SE UN', symbol: 'POAHY' },
      { name: 'GEELY AUTOMOBILE HOLDINGS LIMIT', symbol: 'GELYY' },
      { name: 'GEELY AUTOMOBILE HOLDINGS LIMIT', symbol: 'GELYY'},
      { name: 'PORSCHE AUTOMOBIL HOLDING SE NO', symbol: 'POAHF' },
      { name: 'PORSCHE AUTOMOBIL HOLDING SE', symbol: 'PAH3.F' },
      { name: 'GUANGZHOU AUTOMOBILE GROUP.', symbol: '601238.SS' },
      { name: 'GUANGZHOU AUTOMOBILE GROUP	', symbol: 'GNZUF' },
      { name: 'PORSCHE AUTOMOBIL HOLDING SE PO', symbol: '0JHU.IL' },
      { name: 'DONGFENG AUTOMOBILE CO LTD', symbol: '600006.SS' },
      { name: 'ZOTYE AUTOMOBILE C', symbol: '000980.SZ' },
    ];
    
    function fetchStockPrices(symbols) {
      fetch(`${endpointUrl}?region=US&symbols=${symbols}`, {
        headers: {
          'x-rapidapi-key': apiKey,
          'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
      })
      .then(response => response.json())
      .then(data => {
       STOCK_DATA = data;
        const stockPricesElement = document.getElementById('stock-prices').getElementsByTagName('tbody')[0];
        companies.forEach(company => {
          const stockData = data.quoteResponse.result.find(result => result.symbol === company.symbol);
          const price = stockData.regularMarketPrice;
          const currency = stockData.currency;
          const row = stockPricesElement.insertRow();
          const nameCell = row.insertCell();
          const symbolCell = row.insertCell();
          const priceCell = row.insertCell();
          const currencyCell = row.insertCell();
          nameCell.innerHTML = company.name;
          symbolCell.innerHTML = stockData.symbol;
          priceCell.innerHTML = price;
          currencyCell.innerHTML = currency;
        });
      })
      .catch(error => console.log(error));
    }
    
    
    fetchStockPrices(companies.map(company => company.symbol).join(','));
    
  }
  else  if(rdb4.checked ==true){
    // const api = "3148619249msh15a8cb72e96cf13p19b70fjsn4ea7d7696855"
    const apiKey = api;
    const endpointUrl = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes';
    var STOCK_DATA = {}
    
    const companies = [
      
      { name: 'Lloyds Banking Group Plc', symbol: 'LYG' },
      { name: 'Columbia Banking System, Inc.', symbol: 'COLB' },
      { name: 'Seacoast Banking Corporation of	', symbol: 'SBCF' },
      { name: 'LLOYDS BANKING GROUP PLC ORD 10', symbol: 'LLOY.L' },
      { name: '	LLOYDS BANKING GROUP', symbol: 'LLDTF' },
      { name: 'SOUTHEASTERN BANKING CORP', symbol: 'SEBC' },
      { name: 'WESTPAC BANKING CORPORATION', symbol: 'WEBNF' },
      { name: 'MALAYAN BANKING BERHAD SPONS AD', symbol: 'MLYBY' },
      { name: 'OVERSEA-CHINESE BANKING CORP UN', symbol: 'OVCHY' },
      { name: 'CHINA MINSHENG BANKING CORP UNS', symbol: 'CMAKY' },
        { name: '	CHINA MINSHENG BANKING CORP	', symbol: '600016.SS' },
    ];
    
    function fetchStockPrices(symbols) {
      fetch(`${endpointUrl}?region=US&symbols=${symbols}`, {
        headers: {
          'x-rapidapi-key': apiKey,
          'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
      })
      .then(response => response.json())
      .then(data => {
       STOCK_DATA = data;
        const stockPricesElement = document.getElementById('stock-prices').getElementsByTagName('tbody')[0];
        companies.forEach(company => {
          const stockData = data.quoteResponse.result.find(result => result.symbol === company.symbol);
          const price = stockData.regularMarketPrice;
          const currency = stockData.currency;
          const row = stockPricesElement.insertRow();
          const nameCell = row.insertCell();
          const symbolCell = row.insertCell();
          const priceCell = row.insertCell();
          const currencyCell = row.insertCell();
          nameCell.innerHTML = company.name;
          symbolCell.innerHTML = stockData.symbol;
          priceCell.innerHTML = price;
          currencyCell.innerHTML = currency;
        });
      })
      .catch(error => console.log(error));
    }
    
    
    fetchStockPrices(companies.map(company => company.symbol).join(','));
    
  }
 
  else if(rdb6.checked ==true){
    // const api = "3148619249msh15a8cb72e96cf13p19b70fjsn4ea7d7696855"
    const apiKey = api;
    const endpointUrl = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes';
    var STOCK_DATA = {}
    
    const companies = [
      { name: 'GE HealthCare Technologies Inc.', symbol: 'GEHC' },
      { name: 'HCA Healthcare, Inc.', symbol: 'HCA' },
      { name: 'Omega Healthcare Investors, Inc', symbol: 'OHI' },
      { name: 'Tenet Healthcare Corporation', symbol: 'THC' },
      { name: 'NORTHWEST HEALTHCARE PROP REIT', symbol: 'NWH-UN.TO' },
      { name: 'Diversified Healthcare Trust', symbol: 'DHC' },
      { name: '	Molina Healthcare Inc', symbol: 'MOH' },
      { name: 'AMN Healthcare Services Inc AMN', symbol: 'AMN' },
      { name: 'Sensus Healthcare, Inc.', symbol: 'SRTS' },
      { name: 'Viemed Healthcare, Inc.', symbol: 'VMD' },
        { name: 'Healthcare Realty Trust Incorpo', symbol: 'HR' },
    ];
    
    function fetchStockPrices(symbols) {
      fetch(`${endpointUrl}?region=US&symbols=${symbols}`, {
        headers: {
          'x-rapidapi-key': apiKey,
          'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
      })
      .then(response => response.json())
      .then(data => {
       STOCK_DATA = data;
        const stockPricesElement = document.getElementById('stock-prices').getElementsByTagName('tbody')[0];
        companies.forEach(company => {
          const stockData = data.quoteResponse.result.find(result => result.symbol === company.symbol);
          const price = stockData.regularMarketPrice;
          const currency = stockData.currency;
          const row = stockPricesElement.insertRow();
          const nameCell = row.insertCell();
          const symbolCell = row.insertCell();
          const priceCell = row.insertCell();
          const currencyCell = row.insertCell();
          nameCell.innerHTML = company.name;
          symbolCell.innerHTML = stockData.symbol;
          priceCell.innerHTML = price;
          currencyCell.innerHTML = currency;
        });
      })
      .catch(error => console.log(error));
    }
    
    
    fetchStockPrices(companies.map(company => company.symbol).join(','));
    
  }
  else if(rdb7.checked ==true){
    
    const apiKey = api;
    const endpointUrl = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes';
    var STOCK_DATA = {}
    
    const companies = [
      { name: 'Teva Pharmaceutical Industries', symbol: 'TEVA' },
      { name: 'PPG Industries, Inc.', symbol: 'PPG' },
      { name: 'CF Industries Holdings, Inc', symbol: 'CF' },
      { name: 'GREEN THUMB INDUSTRIES INC', symbol: 'GTBIF' },
      { name: 'LyondellBasell Industries NV', symbol: 'LYB' },
      { name: 'GLOBAL TECH INDUSTRIES GROUP IN', symbol: 'GTII' },
      { name: 'Valmont Industries, Inc.', symbol: 'VMI' },
      { name: 'LSB Industries, Inc', symbol: 'LXU' },
      { name: 'Huntington Ingalls Industries,', symbol: 'HII' },
      { name: 'Mueller Industries, Inc.', symbol: 'MLI' },
        { name: 'Forward Industries, Inc.', symbol: 'FORD' },
    ];
    
    function fetchStockPrices(symbols) {
      fetch(`${endpointUrl}?region=US&symbols=${symbols}`, {
        headers: {
          'x-rapidapi-key': apiKey,
          'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
      })
      .then(response => response.json())
      .then(data => {
       STOCK_DATA = data;
        const stockPricesElement = document.getElementById('stock-prices').getElementsByTagName('tbody')[0];
        companies.forEach(company => {
          const stockData = data.quoteResponse.result.find(result => result.symbol === company.symbol);
          const price = stockData.regularMarketPrice;
          const currency = stockData.currency;
          const row = stockPricesElement.insertRow();
          const nameCell = row.insertCell();
          const symbolCell = row.insertCell();
          const priceCell = row.insertCell();
          const currencyCell = row.insertCell();
          nameCell.innerHTML = company.name;
          symbolCell.innerHTML = stockData.symbol;
          priceCell.innerHTML = price;
          currencyCell.innerHTML = currency;
        });
      })
      .catch(error => console.log(error));
    }
    
    
    fetchStockPrices(companies.map(company => company.symbol).join(','));
    
  }
  else  if(rdb8.checked ==true){
    // const api = "3148619249msh15a8cb72e96cf13p19b70fjsn4ea7d7696855"
    const apiKey = api;
    const endpointUrl = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes';
    var STOCK_DATA = {}
    
    const companies = [
      { name: 'Palantir Technologies Inc.', symbol: 'PLTR' },
      { name: 'SoFi Technologies, Inc.', symbol: 'SOFI' },
      { name: 'Uber Technologies, Inc.', symbol: 'UBER' },
      { name: 'Lumen Technologies, Inc.', symbol: 'LUMN' },
      { name: 'Opendoor Technologies Inc', symbol: 'OPEN' },
      { name: 'GE HealthCare Technologies Inc.', symbol: 'GEHC' },
      { name: 'Raytheon Technologies Corporati', symbol: 'RTX' },
      { name: 'Luminar Technologies, Inc.', symbol: 'LAZR' },
      { name: 'Exela Technologies, Inc.', symbol: 'XELA' },
      { name: '	WELL HEALTH TECHNOLOGIES CORP', symbol: 'WELL.TO' },
        { name: 'SolarEdge Technologies, Inc', symbol: 'SEDG' }
    ];
    
    function fetchStockPrices(symbols) {
      fetch(`${endpointUrl}?region=US&symbols=${symbols}`, {
        headers: {
          'x-rapidapi-key': apiKey,
          'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
      })
      .then(response => response.json())
      .then(data => {
       STOCK_DATA = data;
        const stockPricesElement = document.getElementById('stock-prices').getElementsByTagName('tbody')[0];
        companies.forEach(company => {
          const stockData = data.quoteResponse.result.find(result => result.symbol === company.symbol);
          const price = stockData.regularMarketPrice;
          const currency = stockData.currency;
          const row = stockPricesElement.insertRow();
          const nameCell = row.insertCell();
          const symbolCell = row.insertCell();
          const priceCell = row.insertCell();
          const currencyCell = row.insertCell();
          nameCell.innerHTML = company.name;
          symbolCell.innerHTML = stockData.symbol;
          priceCell.innerHTML = price;
          currencyCell.innerHTML = currency;
        });
      })
      .catch(error => console.log(error));
    }
    
    
    fetchStockPrices(companies.map(company => company.symbol).join(','));
    
  }
  else  if(rdb9.checked ==true){
   
    const apiKey = api;
    const endpointUrl = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes';
    var STOCK_DATA = {}
    
    const companies = [
      { name: 'AMC Entertainment Holdings, Inc', symbol: 'AMC' },
      { name: 'AMC Entertainment Holdings, Inc', symbol: 'APE' },
      { name: 'Madison Square Garden Entertain	', symbol: 'MSGE' },
      { name: 'World Wrestling Entertainment,', symbol: 'WWE' },
      { name: 'Melco Resorts & Entertainment L', symbol: 'MLCO' },
      { name: 'PENN Entertainment, Inc.', symbol: 'PENN' },
      { name: 'Caesars Entertainment, Inc.', symbol: 'CZR' },
      { name: 'Tencent Music Entertainment Gro', symbol: 'TME' },
      { name: '	Live Nation Entertainment, Inc.', symbol: 'LYU' },
      { name: 'Six Flags Entertainment Corpora', symbol: 'SIX' },
        { name: 'Esports Entertainment Group Inc', symbol: 'GMBL' }
    ];
    
    function fetchStockPrices(symbols) {
      fetch(`${endpointUrl}?region=US&symbols=${symbols}`, {
        headers: {
          'x-rapidapi-key': apiKey,
          'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
      })
      .then(response => response.json())
      .then(data => {
       STOCK_DATA = data;
        const stockPricesElement = document.getElementById('stock-prices').getElementsByTagName('tbody')[0];
        companies.forEach(company => {
          const stockData = data.quoteResponse.result.find(result => result.symbol === company.symbol);
          const price = stockData.regularMarketPrice;
          const currency = stockData.currency;
          const row = stockPricesElement.insertRow();
          const nameCell = row.insertCell();
          const symbolCell = row.insertCell();
          const priceCell = row.insertCell();
          const currencyCell = row.insertCell();
          nameCell.innerHTML = company.name;
          symbolCell.innerHTML = stockData.symbol;
          priceCell.innerHTML = price;
          currencyCell.innerHTML = currency;
        });
      })
      .catch(error => console.log(error));
    }
    
    
    fetchStockPrices(companies.map(company => company.symbol).join(','));
    
  }
  else if(rdb10.checked ==true){
 
    const apiKey = api;
    const endpointUrl = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes';
    var STOCK_DATA = {}
    
    const companies = [
      { name: 'Alexandria Real Estate Equities', symbol: 'ARE' },
      { name: 'Ares Commercial Real Estate Cor', symbol: 'ACRE' },
      { name: 'Apollo Commercial Real Estate F', symbol: 'ARI' },
      { name: 'KKR Real Estate Finance Trust I', symbol: 'KREF' },
      { name: 'ALLIED PROPERTIES REAL ESTATE I', symbol: 'AP-UN.TO' },
      { name: 'CBRE Clarion Global Real Estate', symbol: 'IGR' },
      { name: 'NexPoint Real Estate Finance, I', symbol: 'NREF' },
      { name: 'ARTIS REAL ESTATE INVESTMENT TR', symbol: 'AX-UN.TO' },
      { name: 'Pennsylvania Real Estate Invest', symbol: 'PRET' },
      { name: 'HR REAL ESTATE INV TRUST', symbol: 'HR-UN.TO' },
        { name: 'Anywhere Real Estate Inc.', symbol: 'HOUS' }
    ];
    
    function fetchStockPrices(symbols) {
      fetch(`${endpointUrl}?region=US&symbols=${symbols}`, {
        headers: {
          'x-rapidapi-key': apiKey,
          'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
      })
      .then(response => response.json())
      .then(data => {
       STOCK_DATA = data;
        const stockPricesElement = document.getElementById('stock-prices').getElementsByTagName('tbody')[0];
        companies.forEach(company => {
          const stockData = data.quoteResponse.result.find(result => result.symbol === company.symbol);
          const price = stockData.regularMarketPrice;
          const currency = stockData.currency;
          const row = stockPricesElement.insertRow();
          const nameCell = row.insertCell();
          const symbolCell = row.insertCell();
          const priceCell = row.insertCell();
          const currencyCell = row.insertCell();
          nameCell.innerHTML = company.name;
          symbolCell.innerHTML = stockData.symbol;
          priceCell.innerHTML = price;
          currencyCell.innerHTML = currency;
        });
      })
      .catch(error => console.log(error));
    }
    
    
    fetchStockPrices(companies.map(company => company.symbol).join(','));
    
  } 
  else{
     alert("Plase select filter");
  }
}

// Bind check() with filter button
document.getElementById("filter_search").addEventListener('click', () => {
  check();
})
