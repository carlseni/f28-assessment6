
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})


//kyle's examples
test('Choices display when Draw button is clicked', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(300)

    const choicesDiv = await driver.findElement(By.id('choices'))
  
    expect(choicesDiv).not.toBe('')
})

test('Selecting a box display in new div', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.xpath('(//*[text()="Add to Duo"])[1]')).click()

    const playerDuoDiv = await driver.findElement(By.id('player-duo'))
    const displayed = await playerDuoDiv.isDisplayed()
    expect(displayed).toBe(true)

})

//mine

test('Bots are displayed when clicking see all bots', async () => {
    await driver.findElement(By.id('see-all')).click()
    
    const allBots = await driver.findElement(By.id('all-bots'))
    const displayed = await allBots.isDisplayed()
    expect(displayed).toBe(true)

    //should fail

})

