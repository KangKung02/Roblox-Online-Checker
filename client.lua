local fileName = "BakaBakaHentai.txt"

local function getTime()
    local date = os.date('*t')
    local time = os.date("*t")
    return os.date("%A, %m %B %Y | "), ("%02d:%02d:%02d"):format(time.hour, time.min, time.sec)
end

while wait() do
    local Content = tostring(os.time())
    writefile(fileName, Content)
    wait(5)
    writefile(fileName, Content)
    wait(1)

    print(getTime())
end