import random
import string

def cracke_password(password):
    attempts = 0
    while True:
        guess = ''.join(random.choices(string.ascii_letters + string.digits, k=len(password)))
        attempts += 1
        if guess == password:
            return attempts

password = input("Enter the password to crack: ")

print("cracking password...")

attempts = cracke_password(password)
print(f"the password was cracked in {attempts} attempts.")

