export type ProductCategory =
  | 'Jewelry'
  | 'Home Decor'
  | 'Clothing'
  | 'Accessories'
  | 'Beauty'
  | 'Toys'
  | 'Digital Product'
  | 'Other'
  | 'Art Craft Supplies'
  | 'Weddings Parties'
  | 'Vintage Collectibles'
  | 'Stationery Customization'
  | 'Occasion'
  | 'Color';

export interface DecisionTreeNode {
  question: string;
  fieldType: 'text' | 'select' | 'checkbox' | 'radio';
  options?: string[];
  followUp?: Record<string, DecisionTreeNode[]>;
  subCategory?: string;
  instructions?: string[];
}

export const decisionTree: Record<ProductCategory, DecisionTreeNode[]> = {
    Jewelry: [
        {
            question: 'What type of jewelry is it?',
            fieldType: 'select',
            options: ['Ring', 'Necklace', 'Bracelet', 'Earrings', 'Other'],
            followUp: {
                Ring: [
                    {
                        question: 'What material is used?',
                        fieldType: 'select',
                        options: ['Gold', 'Silver', 'Platinum', 'Other'],
                    },
                ],
                Necklace: [],
                Bracelet: [],
                Earrings: [],
                Other: [],
            },
        },
    ],
    'Digital Product': [
      {
        question: 'What type of digital product?',
        fieldType: 'select',
        options: ['Printable Art', 'Wall Art', 'Planners Journals', 'Logos Branding', 'Other (Custom)'],
        followUp: {
          'Printable Art': [
            {
              question: 'Is it for home, office, or other?',
              fieldType: 'select',
              options: ['Home', 'Office', 'Kids Room', 'Other'],
            },
          ],
          'Wall Art': [
            {
              question: 'What style is it?',
              fieldType: 'select',
              options: ['Minimalist', 'Boho', 'Abstract', 'Vintage', 'Other'],
            },
          ],
          'Planners Journals': [
            {
              question: 'Is it dated or undated?',
              fieldType: 'radio',
              options: ['Dated', 'Undated'],
            },
          ],
          'Logos Branding': [
            {
              question: 'Is it a premade or custom logo?',
              fieldType: 'radio',
              options: ['Premade', 'Custom'],
            },
          ],
          'Other (Custom)': [],
        },
      },
    ],
    Other: [
        {
            question: 'Please describe your product',
            fieldType: 'text',
        },
    ],
    "Home Decor": [
      {
        question: 'What type of home decor item is it?',
        fieldType: 'select',
        options: ['Wall Art', 'Candle Holder', 'Vase', 'Decorative Pillow', 'Other'],
        followUp: {
          'Wall Art': [
            {
              question: 'Is it framed or unframed?',
              fieldType: 'radio',
              options: ['Framed', 'Unframed'],
            },
          ],
          'Candle Holder': [],
          'Vase': [],
          'Decorative Pillow': [],
          'Other': [],
        },
      },
    ],
    Clothing: [
      {
        question: 'What type of clothing is it?',
        fieldType: 'select',
        options: ['T-Shirt', 'Dress', 'Sweater', 'Hoodie', 'Other'],
        followUp: {
          'T-Shirt': [
            {
              question: 'What material is it made of?',
              fieldType: 'select',
              options: ['Cotton', 'Polyester', 'Blend', 'Other'],
            },
          ],
          'Dress': [
            {
              question: 'What style is the dress?',
              fieldType: 'select',
              options: ['Casual', 'Formal', 'Boho', 'Other'],
            },
          ],
          'Sweater': [],
          'Hoodie': [],
          'Other': [],
        },
      },
    ],
    Accessories: [
      {
        question: 'What type of accessory is it?',
        fieldType: 'select',
        options: ['Bag', 'Scarf', 'Hat', 'Belt', 'Other'],
        followUp: {
          Bag: [
            {
              question: 'What material is the bag made of?',
              fieldType: 'select',
              options: ['Leather', 'Fabric', 'Canvas', 'Other'],
            },
          ],
          Scarf: [],
          Hat: [],
          Belt: [],
          Other: [],
        },
      },
    ],
    Beauty: [
        {
            question: 'What type of beauty or personal care product is it?',
            fieldType: 'select',
            options: ['Skincare', 'Haircare', 'Makeup', 'Fragrance', 'Other'],
            followUp: {
                Skincare: [
                    {
                        question: 'Is it a cream, serum, or lotion?',
                        fieldType: 'select',
                        options: ['Cream', 'Serum', 'Lotion', 'Other'],
                    },
                ],
                Haircare: [],
                Makeup: [],
                Fragrance: [],
                Other: [],
            },
        },
    ],
    Toys: [
      {
        question: 'What type of toy or entertainment item is it?',
        fieldType: 'select',
        options: ['Plush Toy', 'Educational Toy', 'Puzzle', 'Game', 'Other'],
        followUp: {
          'Plush Toy': [],
          'Educational Toy': [],
          'Puzzle': [],
          'Game': [],
          'Other': [],
        },
      },
    ],
    'Art Craft Supplies': [
      {
        question: 'What type of craft supply is it?',
        fieldType: 'select',
        options: ['Yarn', 'Paint', 'Brushes', 'Beads', 'Other'],
      },
    ],
    'Weddings Parties': [
      {
        question: 'What type of wedding or party item is it?',
        fieldType: 'select',
        options: ['Invitation', 'Party Favor', 'Decoration', 'Guestbook', 'Other'],
        followUp: {
          'Invitation': [],
          'Party Favor': [],
          'Decoration': [],
          'Guestbook': [],
          'Other': [],
        },
      },
    ],
    'Vintage Collectibles': [
      {
        question: 'What kind of vintage collectible?',
        fieldType: 'select',
        options: ['Home Decor', 'Clothing', 'Jewelry', 'Toys', 'Other'],
        followUp: {
          'Home Decor': [
            {
              question: 'From which era or decade?',
              fieldType: 'select',
              options: ['1950s', '1960s', '1970s', '1980s', 'Other'],
            },
          ],
          'Clothing': [
            {
              question: 'Is it men’s or women’s clothing?',
              fieldType: 'radio',
              options: ['Men', 'Women', 'Unisex'],
            },
          ],
          'Jewelry': [],
          'Toys': [],
          'Other': [],
        },
      },
    ],
    'Stationery Customization': [
      {
        question: 'What type of stationery product?',
        fieldType: 'select',
        options: ['Notebook', 'Planner', 'Card', 'Sticker', 'Other'],
        followUp: {
          'Notebook': [
            {
              question: 'Is it lined, dotted, or blank?',
              fieldType: 'select',
              options: ['Lined', 'Dotted', 'Blank', 'Mixed'],
            },
          ],
          'Planner': [
            {
              question: 'Is it dated or undated?',
              fieldType: 'radio',
              options: ['Dated', 'Undated'],
            },
          ],
          'Card': [],
          'Sticker': [],
          'Other': [],
        },
      },
    ],
    Occasion: [
      {
        question: 'What occasion is this product for?',
        fieldType: 'select',
        options: ['Birthday', 'Wedding', 'Anniversary', 'Valentine\'s Day', 'Christmas', 'Everyday', 'Other'],
      },
    ],
    Color: [
      {
        question: 'What are the main product colors?',
        fieldType: 'text',
      },
    ],
};