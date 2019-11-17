
function testStrings(S, T)  {
    if(S == T)  {
        return "Same string!";
    }

    let compareStringLength = S.length - T.length;
    let arrayS = S.split("");
    let arrayT = T.split("");

    if(compareStringLength == -1)   {
        for(let i = 0; i < T.length; i++)   {
            if(arrayS[i] != arrayT[i])  {
                arrayS.splice(i, 0, arrayT[i]);
                if(arrayS.join("") == T)    {
                    return "INSERT " + arrayS[i];
                }
                else    {
                    break;
                }
            }
        }
    }

    else if(compareStringLength == 1)   {
        for(let i = 0; i < S.length; i++)   {
            if(arrayS[i] != arrayT[i])  {
                let deleteFromArrayS = arrayS.splice(i, 1)[0];
                if(arrayS.join("") == T)    {
                    return "DELETE " + deleteFromArrayS;
                }
                else    {
                    break;
                } 
            }
        }
    }

    else if(compareStringLength == 0)   {
        for(let i = 0; i < S.length; i++)   {
            if(arrayS[i] != arrayT[i])  {
                let swappedArray = arrayS[i];
                arrayS[i] = arrayS[i + 1];
                arrayS[i + 1] = swappedArray;
                if(arrayS.join("") == T)    {
                    return "SWAP " + arrayS[i + 1] + " " + arrayS[i];
                }
                else    {
                    break;
                }
            }
        }
    }
    return "IMPOSSIBLE";
}

function out(msg)   {
    let newDiv = document.createElement("div");
    let addText = document.createTextNode(msg);
    newDiv.appendChild(addText);
    document.body.appendChild(newDiv);

}

out(testStrings("repair", "repair"));
out(testStrings("gain", "again"));
out(testStrings("form", "from"));
out(testStrings("parks", "park"));
out(testStrings("o", "odd"));