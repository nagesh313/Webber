package asdf;

import java.io.*;
public class CandidateCode2 {
	public static void main(String args[]) {
		//System.out.println(CandidateCode2.getPoints(new int[] { 2,5,1,3,3,1,2,5,1,2,3,4 }, 12));
		//System.out.println(CandidateCode2.getPoints(new int[] { 2,3,1,2,9,5,7,6,4,3 }, 10));
		//System.out.println(CandidateCode2.getPoints(new int[] { 15, 3, 15, 3 }, 4));
		//System.out.println(CandidateCode2.getPoints(new int[] { 6,3,5,17,19,15,13,15,6,3,5,18,19 }, 13));
		System.out.println(CandidateCode2.getPoints(new int[] { 15}, 1));
	}

	public static String getPoints(int[] input1, int input2) {
		if (input1.length<1||input2<1) {
			return "invalid";
		}
		StringBuffer output = new StringBuffer();
		for (int i = 0; i < input2; i++) {
			if (input1[i] > 20) {
				return "invalid";
			}
			output.append(matchCount(input1, i)+",");
		}
		if(output.charAt(output.length()-1)==','){
			output.setLength(output.length()-1);
			return output.toString();
		}
		return "invalid";
	}

	public static int matchCount(int[] input1, int i) {
		int matchCount = 0;
		if (i == 0) {
			return matchCount;
		}
		for (int j = i; j >= 0; j--) {
			int seqMatch = CandidateCode2.matches(input1, j, i);
				matchCount=seqMatch+matchCount;
		}
		return matchCount;
	}
	//should return number of matching elements.
	public static int matches(int input1[], int lowerIndex, int higherIndex) {
		int sequenceMatch = 0;
		while (lowerIndex >= 0 && higherIndex != lowerIndex) {
			if (input1[lowerIndex] == input1[higherIndex]) {
				++sequenceMatch;
				--lowerIndex ;
				--higherIndex ;
			}
			else return sequenceMatch;
		}
		return sequenceMatch;
	}
}
