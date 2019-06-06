import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Input } from '@angular/core';

const EXAMPLE_HTML = `
<clr-tree-node *ngFor="let directory of rootDirectory" [(clrExpanded)]="directory.expanded">
    <clr-icon [attr.shape]="directory.icon"></clr-icon>
    {{directory.name}}
    <clr-tree-node *ngFor="let file of directory.files">
        <button
                (click)="openFile(directory.name, file.name)"
                class="clr-treenode-link"
                [class.active]="file.active">
            <clr-icon [attr.shape]="file.icon"></clr-icon>
            {{file.name}}
        </button>
    </clr-tree-node>
</clr-tree-node>
`;

const EXAMPLE_TS = `
    rootDirectory: any[] = [
        {
            name: "Applications",
            icon: "folder",
            expanded: true,
            files: [
                {
                    icon: "calendar",
                    name: "Calendar",
                    active: true
                },
                {
                    icon: "line-chart",
                    name: "Charts",
                    active: false
                },
                {
                    icon: "dashboard",
                    name: "Dashboard",
                    active: false
                },
                {
                    icon: "map",
                    name: "Maps",
                    active: false
                },
                ...
            ]
        },
        {
            name: "Files",
            icon: "folder",
            expanded: false,
            files: [
                {
                    icon: "file",
                    name: "Cover Letter.doc",
                    active: false
                },
                ...
            ]
        },
        {
            name: "Images",
            icon: "folder",
            expanded: false,
            files: [
                {
                    icon: "image",
                    name: "Screenshot.png",
                    active: false
                },
                ...
            ]
        }
    ];
    
    openFile(directoryName: string, fileName: string) {
        ...
        ...
    }
`;



@Component({
  selector: 'app-tree-view-icons',
  templateUrl: './tree-view-icons.component.html',
  styleUrls: ['./tree-view-icons.component.css']
})
export class TreeViewIconsComponent implements OnInit {

  constructor(private titleService: Title) { }

  componentTitle = 'Tree View - Icons';
  setTitle(newTitle: string) { this.titleService.setTitle(newTitle); }
  @ViewChild('componentHeading') elementToFocusOnInit: ElementRef;

  ngOnInit() {
    this.setTitle(this.componentTitle);
    this.elementToFocusOnInit.nativeElement.focus();
  }

  @Input('clrDemoShowCode') showCode: boolean = false;
  @Input('clrDemoShowHalf') showHalf: boolean = false;

  exampleHtml = EXAMPLE_HTML;
  exampleTs = EXAMPLE_TS;

  rootDirectory: any[] = [
    {
      name: 'Applications',
      icon: 'folder',
      expanded: true,
      files: [
        {
          icon: 'calendar',
          name: 'Calendar',
          active: true,
        },
        {
          icon: 'line-chart',
          name: 'Charts',
          active: false,
        },
        {
          icon: 'dashboard',
          name: 'Dashboard',
          active: false,
        },
        {
          icon: 'map',
          name: 'Maps',
          active: false,
        },
        {
          icon: 'email',
          name: 'Mail',
          active: false,
        },
        {
          icon: 'bar-chart',
          name: 'Numbers',
          active: false,
        },
        {
          icon: 'tasks',
          name: 'Tasks',
          active: false,
        },
        {
          icon: 'flag',
          name: 'Reminders',
          active: false,
        },
      ],
    },
    {
      name: 'Files',
      icon: 'folder',
      expanded: false,
      files: [
        {
          icon: 'file',
          name: 'Cover Letter.doc',
          active: false,
        },
        {
          icon: 'file',
          name: 'Flyer.doc',
          active: false,
        },
        {
          icon: 'file',
          name: 'Resume.doc',
          active: false,
        },
        {
          icon: 'file',
          name: 'Notes.txt',
          active: false,
        },
      ],
    },
    {
      name: 'Images',
      icon: 'folder',
      expanded: false,
      files: [
        {
          icon: 'image',
          name: 'Screenshot.png',
          active: false,
        },
        {
          icon: 'image',
          name: 'Pic.png',
          active: false,
        },
        {
          icon: 'image',
          name: 'Portfolio.jpg',
          active: false,
        },
      ],
    },
  ];

  openFile(directoryName, fileName): void {
    for (const dir of this.rootDirectory) {
      if (directoryName === dir.name) {
        this.setFileActive(dir, fileName);
      } else {
        for (const file of dir.files) {
          file.active = false;
        }
      }
    }
  }

  setFileActive(dir: any, fileName: string) {
    for (const file of dir.files) {
      if (file.name === fileName) {
        file.active = true;
      } else {
        file.active = false;
      }
    }
  }



}
