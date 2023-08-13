# Howell Bank

Instructions: The Howell Bank provides savings accounts that compound interest on a yearly basis. In other words, if you deposit $100 for two years at 4 percent interest, at the end of one year you will have $104. At the end of two years, you will have the $104 plus 4 percent of that, or $108.16. Design a program that accepts an account number, the account owner's first and last names, and a balance. The program operate continuously until an appropriate sentinel value is entered for the account number. Output the projected running total balance for each account for each of the next 20 years.


Psuedocode:



          acc_num: 2254885698
          quit: 0
          name: firstname + lastname
          balance: 1000
          interest: 0.04
          deposit: 200
          currentbalance
          year: 2

          while acc_num != quit
            currentbalance = deposit + (deposit * interest)
            while year <= 20
              currentbalance = currentbalance + (deposit * interest)
              message: your savings (currentbalance) at year + (year)
              year = year + 1
            endwhile

            acc_num = quit // end the whole loop

          endwhile

