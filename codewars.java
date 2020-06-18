public class Number {

  public boolean isEven(double n) {
      // Your awesome code here!
      if (n % 2==0) {
        return true;
      } else {
        return false;
      }
  }
}

// convert int to string
public class ToString {
  public static final String a =Integer.toString(123);

}

public class Kata {
  
  public static boolean zeroFuel(double distanceToPump, double mpg, double fuelLeft) {


    if (distanceToPump/mpg<=fuelLeft) {
      return true;
    } else {
      return false;
    }
  }
  
}

public class RemoveChars {
    public static String remove(String str) {
      return str.substring(1, str.length()-1);
    }
}