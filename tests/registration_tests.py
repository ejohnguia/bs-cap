import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

class RegistrationTests(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Firefox()

    def test_next(self):
        driver = self.driver

        # TO-DO: need to get our site in paste it here after running npm start 
        driver.get("http://www.python.org")

        # TO-DO: get next button

    def tearDown(self):
        print("done")
        self.driver.quit() 

if __name__ == "__main__":
    unittest.main()