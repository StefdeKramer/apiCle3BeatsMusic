window.addEventListener('load', init);

function init(){
    WriteFile;
}
function WriteFile() {
    var f = "text.txt";

    writeTextFile(f, "Spoon");
    writeTextFile(f, "Cheese monkey");
    writeTextFile(f, "Onion");
}
function writeTextFile(afilename, output)
{
    var txtFile =new File(afilename);
    txtFile.writeln(output);
    txtFile.close();
}
