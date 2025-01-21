def main():
  n = int(input())
  for i in range(n):
    x = int(input())
    par = x % 2 == 0
    if x == 0:
      print("NULL")
    elif x > 0 and par:
      print("EVEN POSITIVE")
    elif x > 0 and not par:
      print("ODD POSITIVE")
    elif x < 0 and par:
      print("EVEN NEGATIVE")
    elif x < 0 and not par:
      print("ODD NEGATIVE")
main()