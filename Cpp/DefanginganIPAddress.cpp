class Solution {
public:
    string defangIPaddr(string address) {
        std::string output;
        output.reserve(address.size());
        
        for (const char c: address) {
            if(c == '.'){
                output += "[.]";       
            }
            else{
               output += c;   
            }     
    }

    return output;
        
    }
};
