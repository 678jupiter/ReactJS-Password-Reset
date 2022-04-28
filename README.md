# <--- POST API --->

 JSON = {
	"amnt":"1",
	"number":"254799568838"
}

# 1) Input Field
    mobileNumber
    Amount
    SubmitButton
# 2) Collect input Vallues

# 3) Using the condition check amnt.length!=0 && !(isNan(amnt) && amnt>0 to   ensure the transaction amount provided is not null, is of type numberand is a number greater than 0.


# 4) Making use of the /^(?:254|\+254|0)?(7(?:(?:[129][0-9])|(?:0[0-8])|(4[0-1]))[0-9]{6})$/ regular expression to check for valid KE numbers. The regexp will only allow valid telephone numbers either starting with the area code (+254, 254) or the country internal prefix (0).


# before send
  processing OutPut

# After send 
  Transaction Initiated + Make sure to authorize the Transaction + Processing

# simply keep sending a GET request to our server which invokes a process to check whether the entry representing the current transaction in our localCache has its callBackStatus property set to true. We time these GET requests to 50s max-execution-time, then space them over some interval, let’s say, 3s.
   

