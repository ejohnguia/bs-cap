import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

class PythonOrgSearch(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Firefox()

    def test_search_in_python_org(self):
        driver = self.driver
        driver.get("http://www.python.org") 
        self.assertIn("Python", driver.title)                       # Checks if "Python" is in the title 
        elem = driver.find_element(By.NAME, "q")                    # Grabs name element "q" 

        # "send_keys" is a method to send text to any field
        elem.send_keys("pycon")                                     # Enter "pycon" in text field
        elem.send_keys(Keys.RETURN)                                 # Hits "Enter" on keyboard to submit
        
        self.assertNotIn("No results found.", driver.page_source)   # Check if "No results found" is not in page

    def tearDown(self):
        # self.driver.close() # <-- throws an "WinError 6"
        self.driver.quit() 

if __name__ == "__main__":
    unittest.main()