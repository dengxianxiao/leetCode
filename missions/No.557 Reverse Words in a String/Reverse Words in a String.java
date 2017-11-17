/**
 * Description:
 * 
 * Given a string, you need to reverse the order of characters in each word 
 * within a sentence while still preserving whitespace and initial word order.
 *
 * Example:
 * Input: "Let's take LeetCode contest"
 * Output: "s'teL ekat edoCteeL tsetnoc"
 */

class Solution {
    public String reverseWords(String s) {
        // 分隔字符串
        String[] arr = s.split("\\s+");
        StringBuilder a = new StringBuilder();
        for (String string : arr) {
            // 字符串拼接
            a.append(new StringBuilder(string).reverse().toString()).append(" ");
        }
        // 去掉最后一个空格
        return a.substring(0, a.length() - 1).trim();
    }
}