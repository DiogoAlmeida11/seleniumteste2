var webdriver = require("selenium-webdriver"),
    By = webdriver.By,
    util = webdriver.util
    Key = webdriver.Key;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get("https://www.ipp.pt/");
driver.findElement(By.className(" css-obl10m")).click();
driver.findElement(By.className("ui-autocomplete-input")).sendKeys('design',Key.RETURN);
//driver.findElement(By.xpath('//*[@id="course-search-results"]/div[3]/h2/a')).click();
//driver.findElement(By.name('searchText')).sendKeys('design',Key.RETURN); // procura com texto
//driver.findElement(By.id("L2AGLb")).click(); // accept cookies
//driver.findElement(By.name('q')).sendKeys('webdriver',Key.RETURN); // procura com texto
//driver.quit(); // fecha a página
//*[@id="course-search-results"]/div[3]/h2/a // copy xpath from console
//time.sleep(5);
//driver.close();

