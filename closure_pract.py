msg='Global Scope'

def outer_funct():
    msg='Enclosed Scope'
    def inner_func():
        # msg='Inner Scope'
        nonlocal msg
        # msg='hello'
        print(msg)
        # del(msg)
        # nonlocal msg
        # print(msg)
    inner_func()
    print(msg)

# c=outer_funct()
# print(c())
# outer_funct()
# print(msg)


##-------------------------CLOSURE PRACTISE--------------------------##
# from  timeit import

#print multiple







def multiple_n(n):
    def multiple_inner(x):
        if x:
            print('printing x',n,x)
        return n*x
    return multiple_inner


print()


times_3=multiple_n(3)
times_5=multiple_n(5)
print(times_3(3))
print(times_5(3))