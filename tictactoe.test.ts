import { Builder, Capabilities, By, Button } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

describe('tic tac js test', async () => {
    test('I can start a game', async () => {
        let button = await (await driver).findElement(By.id('start-game'));
        await button.click();
    });
    test('Check that clicking the upper left square adds an X to the square', async () => {
        let button = await (await driver).findElement(By.xpath('//*[@id="cell-0"]'));
        await button.click();
        let btnCont = await (await driver).findElement(By.xpath('//*[@id="cell-0"]')).getAttribute('innerHTML');
        expect(btnCont).toBe('X')
    });
    test('Check that clicking the upper right square adds an X to the square', async () => {
        let button = await (await driver).findElement(By.id('cell-0'));
        await button.click();
        let btnCont = await (await driver).findElement(By.id('cell-0')).getAttribute('innerHTML');
        expect(btnCont).toBe('X')
    });
    test('Check that clicking the lower right square adds an X to the square', async () => {
        let button = await (await driver).findElement(By.xpath('//*[@id="cell-8"]'));
        await button.click();
        let btnCont = await (await driver).findElement(By.xpath('//*[@id="cell-8"]')).getAttribute('innerHTML');
        expect(btnCont).toBe('X')
    });
    test('Check that opponent ("O") has gone', async () => {
        let btnCont = await (await driver).findElement(By.xpath('//*[@id="cell-1"]')).getAttribute('innerHTML');
        expect(btnCont).toBe('O')
    });
    test('Check that opponent ("O") has gone', async () => {
        let btnCont2 = await (await driver).findElement(By.xpath('//*[@id="cell-3"]')).getAttribute('innerHTML');
        expect(btnCont2).toBe('O')
    })
    test('Check that opponent ("O") has gone', async () => {
        let btnCont3 = await (await driver).findElement(By.xpath('//*[@id="cell-4"]')).getAttribute('innerHTML');
        expect(btnCont3).toBe('O')
    })
})
